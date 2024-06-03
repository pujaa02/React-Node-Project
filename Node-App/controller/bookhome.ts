import * as express from "express";
const route = express.Router();
import { Request, Response } from "express";
import con from "../models/database";



const getarrival = async (req: Request, res: Response) => {
    const newarrivalbooks = await con.getall(`select prime_book_id,book_img,created_at from books_detail 
        where created_at between DATE_SUB(DATE_SUB(NOW(), INTERVAL 3 HOUR), INTERVAL 70 DAY) AND DATE_SUB(NOW(), INTERVAL 3 HOUR);`);
    const findrecentreadingquery = await con.getall(`SELECT inventory.prime_book_id,inventory.book_id,books_log.borrow_date FROM books_log
        join inventory on books_log.book_id=inventory.book_id
         where borrow_date between DATE_SUB(DATE_SUB(NOW(),INTERVAL 3 HOUR), INTERVAL 70 DAY)  AND DATE_SUB(NOW(), INTERVAL 3 HOUR);`);
    const genre = await con.getall(`SELECT * FROM genres`);
    const allbook = await con.getall(`select books_detail.prime_book_id,books_detail.book_title,books_detail.genre_id,authors.author_name,
     genres.genre_name, books_detail.book_publication_year,books_detail.book_img from books_detail
       join genres on genres.genre_id=books_detail.genre_id
      join books_author on books_author.prime_book_id=books_detail.prime_book_id
      join authors on authors.author_id=books_author.author_id;`);
    const rating = await con.getall(`select inventory.prime_book_id, floor(Avg(rating.rating)) AS rating from rating
      join inventory on inventory.book_id=rating.book_id group by inventory.prime_book_id ;`);


    //recommeddata mapping
    const recommendeddata = rating.map((t1) => ({
        ...t1,
        ...allbook.find((t2) => t2.prime_book_id === t1.prime_book_id),
    }));

    //recentdata mapping
    const filterdataofrecent = findrecentreadingquery.filter(
        (value, index, self) => {
            return (
                self.findIndex((v) => v.prime_book_id === value.prime_book_id) ===
                index
            );
        }
    );
    // mapping of two query result
    const maprecentdata = filterdataofrecent.map((t1) => ({
        ...t1,
        ...allbook.find((t2) => t2.prime_book_id === t1.prime_book_id),
    }));

    const recentdata = maprecentdata.map((t1) => ({
        ...t1,
        ...rating.find((t2) => t2.prime_book_id === t1.prime_book_id),
    }));

    //allbook
    let ratingfilter = rating.filter((value, index, self) => {
        return (
            self.findIndex((v) => v.prime_book_id === value.prime_book_id) === index
        );
    });

    const finalresultdata = allbook.map((t1) => ({
        ...t1,
        ...ratingfilter.find((t2) => t2.prime_book_id === t1.prime_book_id),
    }));

      
    res.json({ newarrivalbooks: newarrivalbooks, recommended: recommendeddata, recent: recentdata, genre: genre, allbook: finalresultdata, rating: rating });
}


// const recent = async (req: Request, res: Response) => {
//     const findrecentreadingquery = await con.getall(`SELECT inventory.prime_book_id,inventory.book_id,books_log.borrow_date FROM books_log
//     join inventory on books_log.book_id=inventory.book_id
//      where borrow_date between DATE_SUB(DATE_SUB(NOW(),INTERVAL 3 HOUR), INTERVAL 20 DAY)  AND DATE_SUB(NOW(), INTERVAL 3 HOUR);`);
//     res.json({ result: findrecentreadingquery });
// }

// const genre = async (req: Request, res: Response) => {
//     const genre = await con.getall(`SELECT * FROM genres`);
//     res.json({ result: genre });
// }

// const allbook = async (req: Request, res: Response) => {
//     const allbook = await con.getall(`select books_detail.prime_book_id,books_detail.book_title,books_detail.genre_id,authors.author_name,
//      genres.genre_name, books_detail.book_publication_year,books_detail.book_img from books_detail
//        join genres on genres.genre_id=books_detail.genre_id
//       join books_author on books_author.prime_book_id=books_detail.prime_book_id
//       join authors on authors.author_id=books_author.author_id;`);
//     res.json({ result: allbook });
// }

// const rating = async (req: Request, res: Response) => {
//     const rating = await con.getall(`select inventory.prime_book_id, floor(Avg(rating.rating)) AS rating from rating
//      join inventory on inventory.book_id=rating.book_id group by inventory.prime_book_id ;`);
//     res.json({ result: rating });
// }

// export default { getarrival, recent, genre, allbook, rating };
export default { getarrival }