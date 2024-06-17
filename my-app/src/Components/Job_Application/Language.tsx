import React from "react";
import { useFormContext, FieldError } from "react-hook-form";
import { FormData } from "../interfacefile";
const Language: React.FC = () => {
  const {
    register,
    formState: { errors },
    clearErrors,
    getValues,
  } = useFormContext<FormData>();

 
  const validateLanguage = (
    language: keyof FormData,
    reads: (keyof FormData)[],
    writes: (keyof FormData)[],
    speaks: (keyof FormData)[]
  ) => {
    const isParentSelected = getValues(language);
    const isAnyChildSelected =
      reads.some((read) => getValues(read)) ||
      writes.some((write) => getValues(write)) ||
      speaks.some((speak) => getValues(speak));

    if (isParentSelected && !isAnyChildSelected) {
      return "At least one child option must be selected";
    } else if (isAnyChildSelected && !isParentSelected) {
      return "Language must be Selected!!";
    } else {
      clearErrors(language);
    }
  };

 

  const validateTechnology = (tech: keyof FormData, level: keyof FormData) => {
    const isTechSelected = getValues(tech);
    const isLevelSelected = getValues(level);

    if (isTechSelected && !isLevelSelected) {
      return "Corresponding level must be selected";
    } else if (isLevelSelected && !isTechSelected) {
      return "Corresponding technology must be selected";
    } else {
      clearErrors(tech);
    }
  };


  return (
    <div className="application-form-container">
      <form>
        <table>
          <tr>
            <td>
              <fieldset
                className="fieldset form-control"
                style={{ width: 400 }}
              >
                <legend>
                  <b>Language Known</b>
                </legend>
                <div className="container_language">
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="hindi"
                          id="hindi"
                          {...register("hindi", {
                            validate: () =>
                              validateLanguage(
                                "hindi",
                                ["read1"],
                                ["write1"],
                                ["speak1"]
                              ),
                          })}
                        />
                        <label className="form-check-label">Hindi</label>
                        {errors.hindi && (
                          <p className="red">
                            {(errors.hindi as FieldError).message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="read"
                        id="read1"
                        {...register("read1", {
                          validate: () =>
                            validateLanguage(
                              "hindi",
                              ["read1"],
                              ["write1"],
                              ["speak1"]
                            ),
                        })}
                      />
                      <label className="form-check-label">read</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="write"
                        id="write1"
                        {...register("write1", {
                          validate: () =>
                            validateLanguage(
                              "hindi",
                              ["read1"],
                              ["write1"],
                              ["speak1"]
                            ),
                        })}
                      />
                      <label className="form-check-label">write</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="speak"
                        id="speak1"
                        {...register("speak1", {
                          validate: () =>
                            validateLanguage(
                              "hindi",
                              ["read1"],
                              ["write1"],
                              ["speak1"]
                            ),
                        })}
                      />
                      <label className="form-check-label">Speak</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="english"
                          id="english"
                          {...register("english", {
                            validate: () =>
                              validateLanguage(
                                "english",
                                ["read2"],
                                ["write2"],
                                ["speak2"]
                              ),
                          })}
                        />
                        <label className="form-check-label">English</label>
                        {errors.english && (
                          <p className="red">
                            {(errors.english as FieldError).message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="read"
                        id="read2"
                        {...register("read2", {
                          validate: () =>
                            validateLanguage(
                              "english",
                              ["read2"],
                              ["write2"],
                              ["speak2"]
                            ),
                        })}
                      />
                      <label className="form-check-label">read</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="write"
                        id="write2"
                        {...register("write2", {
                          validate: () =>
                            validateLanguage(
                              "english",
                              ["read2"],
                              ["write2"],
                              ["speak2"]
                            ),
                        })}
                      />
                      <label className="form-check-label">write</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="speak"
                        id="speak2"
                        {...register("speak2", {
                          validate: () =>
                            validateLanguage(
                              "english",
                              ["read2"],
                              ["write2"],
                              ["speak2"]
                            ),
                        })}
                      />
                      <label className="form-check-label">Speak</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="gujarati"
                          id="gujarati"
                          {...register("gujarati", {
                            validate: () =>
                              validateLanguage(
                                "gujarati",
                                ["read3"],
                                ["write3"],
                                ["speak3"]
                              ),
                          })}
                        />
                        <label className="form-check-label">Gujarati</label>
                        {errors.gujarati && (
                          <p className="red">
                            {(errors.gujarati as FieldError).message}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="read"
                        id="read3"
                        {...register("read3", {
                          validate: () =>
                            validateLanguage(
                              "gujarati",
                              ["read3"],
                              ["write3"],
                              ["speak3"]
                            ),
                        })}
                      />
                      <label className="form-check-label">read</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="write"
                        id="write3"
                        {...register("write3", {
                          validate: () =>
                            validateLanguage(
                              "gujarati",
                              ["read3"],
                              ["write3"],
                              ["speak3"]
                            ),
                        })}
                      />
                      <label className="form-check-label">write</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="speak"
                        id="speak3"
                        {...register("speak3", {
                          validate: () =>
                            validateLanguage(
                              "gujarati",
                              ["read3"],
                              ["write3"],
                              ["speak3"]
                            ),
                        })}
                      />
                      <label className="form-check-label">Speak</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </td>
            <td>
              <fieldset
                className="fieldset form-control"
                style={{ width: 500 }}
              >
                <legend>
                  <b>Technologies you know</b>
                </legend>
                <div className="container_language_language">
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="php"
                        id="php"
                        {...register("php", {
                          validate: () => validateTechnology("php", "level1"),
                        })}
                      />
                      <label className="form-check-label">Php</label>
                      {errors.php && (
                        <p className="red">
                          {(errors.php as FieldError).message}
                        </p>
                      )}
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level1", {
                          validate: () => validateTechnology("php", "level1"),
                        })}
                        id="beg1"
                        value="beginner"
                      />
                      <label className="form-check-label">Beginner</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level1", {
                          validate: () => validateTechnology("php", "level1"),
                        })}
                        id="mid1"
                        value="mideator"
                      />
                      <label className="form-check-label">Mideator</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level1", {
                          validate: () => validateTechnology("php", "level1"),
                        })}
                        id="ex1"
                        value="expert"
                      />
                      <label className="form-check-label">Expert</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="mysql"
                        id="mysql"
                        {...register("mysql", {
                          validate: () => validateTechnology("mysql", "level2"),
                        })}
                      />
                      <label className="form-check-label">Mysql</label>
                      {errors.mysql && (
                        <p className="red">
                          {(errors.mysql as FieldError).message}
                        </p>
                      )}
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level2", {
                          validate: () => validateTechnology("mysql", "level2"),
                        })}
                        id="beg2"
                        value="beginner"
                      />
                      <label className="form-check-label">Beginner</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level2", {
                          validate: () => validateTechnology("mysql", "level2"),
                        })}
                        id="mid2"
                        value="mideator"
                      />
                      <label className="form-check-label">Mideator</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level2", {
                          validate: () => validateTechnology("mysql", "level2"),
                        })}
                        id="ex2"
                        value="expert"
                      />
                      <label className="form-check-label">Expert</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="laravel"
                        id="laravel"
                        {...register("laravel", {
                          validate: () =>
                            validateTechnology("laravel", "level3"),
                        })}
                      />
                      <label className="form-check-label">laravel</label>
                      {errors.laravel && (
                        <p className="red">
                          {(errors.laravel as FieldError).message}
                        </p>
                      )}
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level3", {
                          validate: () =>
                            validateTechnology("laravel", "level3"),
                        })}
                        id="beg3"
                        value="beginner"
                      />
                      <label className="form-check-label">Beginner</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level3", {
                          validate: () =>
                            validateTechnology("laravel", "level3"),
                        })}
                        id="mid3"
                        value="mideator"
                      />
                      <label className="form-check-label">Mideator</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level3", {
                          validate: () =>
                            validateTechnology("laravel", "level3"),
                        })}
                        id="ex3"
                        value="expert"
                      />
                      <label className="form-check-label">Expert</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value="oracle"
                        id="oracle"
                        {...register("oracle", {
                          validate: () =>
                            validateTechnology("oracle", "level4"),
                        })}
                      />
                      <label className="form-check-label">Oracle</label>
                      {errors.oracle && (
                        <p className="red">
                          {(errors.oracle as FieldError).message}
                        </p>
                      )}
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level4", {
                          validate: () =>
                            validateTechnology("oracle", "level4"),
                        })}
                        id="beg4"
                        value="beginner"
                      />
                      <label className="form-check-label">Beginner</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level4", {
                          validate: () =>
                            validateTechnology("oracle", "level4"),
                        })}
                        id="mid4"
                        value="mideator"
                      />
                      <label className="form-check-label">Mideator</label>
                    </div>
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="radio"
                        {...register("level4", {
                          validate: () =>
                            validateTechnology("oracle", "level4"),
                        })}
                        id="ex4"
                        value="expert"
                      />
                      <label className="form-check-label">Expert</label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
};

export default Language;
