import React, { useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Basic_Detail from "./Basic_Detail";
import Education from "./Education";
// import Experience from "./Experience";
import Experience from "./exp";
import Language from "./Language";
// import Relation from "./Relation";
import Relation from "./rel";
import Preferance from "./Preferences";
import "./form.css";
import { FormData, propState } from "../interfacefile";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Multistepform() {
    const location = useLocation();
    const [id, setId] = useState<string>("");
    const navigate = useNavigate();
    const [step, setStep] = useState<number>(1);
    const [formData, setFormData] = useState<FormData>();
    const methods = useForm<FormData>({
        mode: "onBlur",
        defaultValues: formData,
    });

    useEffect(() => {
        if (location.state) {
            const { id } = location.state as propState;
            setId(id);
        }
    }, [location.state]);

    useEffect(() => {
        if (id !== "" && id !== undefined) {
            const getEmpData = async () => {
                try {
                    const response = await axios.get(`http://localhost:3036/fetchempdata/${id}`);
                    const emp = response.data.result;
                    setFormData(emp);
                    methods.reset(emp);
                } catch (error) {
                    console.log(error);
                }
            };
            getEmpData();
        }
    }, [id]);

    const prevStep = () => {
        setFormData((prev) => ({ ...prev, ...methods.getValues() }));
        setStep(step - 1);
    };

    const nextStep = async () => {
        const isValid = await methods.trigger();
        if (isValid) {
            setFormData((prev) => ({ ...prev, ...methods.getValues() }));
            setStep(step + 1);
        }
    };

    const onSubmit: SubmitHandler<FormData> = async (data) => {
        let url = window.location.pathname;
        if (url === "/updateform") {
            const result = await axios.post(`http://localhost:3036/updateform/${id}`, data, { withCredentials: true, });
            if (result.data.msg === "Success") {
                navigate("/fetchemp");
            }
        } else {
            const result = await axios.post(`http://localhost:3036/insertform`, data, { withCredentials: true, });
            if (result.data.msg === "Success") {
                navigate("/fetchemp");
            }
        }
    };
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="application-form"
            >
                <div className="btn-div">
                    {step > 1 && (
                        <button type="button" onClick={prevStep} className="btn-of-form">
                            Back
                        </button>
                    )}
                    {step < 6 && (
                        <button type="button" onClick={nextStep} className="btn-of-form">
                            Next
                        </button>
                    )}
                    {step === 6 && (
                        <button type="submit" className="btn-of-form">
                            Submit
                        </button>
                    )}
                </div>
                {step === 1 && <Basic_Detail />}
                {step === 2 && <Education />}
                {step === 3 && <Experience />}
                {step === 4 && <Language />}
                {step === 5 && <Relation />}
                {step === 6 && <Preferance />}
            </form>
        </FormProvider>
    );
   
}

export default Multistepform;

