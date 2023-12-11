"use client";
import { Service } from "@/models/service";
import styles from "./page.module.css";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import classNames from 'classnames';
import Furniture from "../../../../components/apartmentDetail/furniture";
import { futuna } from "../../../../../public/fonts/futura";
import { ChangeEvent, useEffect, useState } from "react";
import { endpoint } from "@/constraints/endpoints";
import { useQuery } from "react-query";
import axios from "axios";
import ServicePackage from "../../../../components/servicePackage/servicePackage";
import ServicePackageModal from "./addServicePackage";
import { ToastContainer } from "react-toastify";
import toastMessage from "../../../../utils/toast";
import StarRatings from "react-star-ratings";
import ButtonComponent from "@/components/buttonComponent/buttonComponent";
import { loadingFiler, removeLoadingFilter } from "@/libs/utils";
import { Feedback } from "@/models/feedback";
import { Resident } from "@/models/resident";
import { Value } from "sass";
import { UserProfile } from "@/libs/UserProfile";
import { serialize } from "v8";
import ModalComponent from "@/components/Modal/Modal";
import { CloseIcon } from "@/components/icons";
import { set } from "date-fns";
export default function Page({ params }: { params: { id: string } }) {

  // let service:service= JSON.parse("{'id':'123', 'name':'M}");
  //console.log(service);
  type FormValue = {
    rating: string;
    comment: string;
    service_id: string;
    resident_id: string;
  };
  const [formValue, setFormValue] = useState<FormValue>({
    rating: "",
    comment: "",
    service_id: params.id,
    resident_id: "",
  });
  const [selectedId, setSelectedId] = useState("");
  const deleleHandle = (id: string) => {
    setSelectedId(id);
    setShowModalDelete(true);
  };
  const [residentId, setResidentId] = useState(null);
  const [serviceId, setServiceId] = useState(null);
  const [feedback, setFeedback] = useState<Feedback>();
  useEffect(() => {
    const userProfile = UserProfile.getProfile();
    setResidentId(userProfile.id);
  }, []);
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);
  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = await UserProfile.getProfile();
      setFormValue((prevState) => ({ ...prevState, resident_id: user.id }));
    };

    fetchUserProfile();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/feedback?service_id=${params.id}`);
        setFeedbackData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.id]);
  const retrieveFeedback = async () => {
    try {
      loadingFiler(document.body!);
      const res = await axios.get('/api/feedback');
      removeLoadingFilter(document.body!);
      const floorData = res.data;
      setFeedbackData(floorData);
      return res.data;
    } catch (error) {
      removeLoadingFilter(document.body!);
      console.log(error);
    }
  };
  const [errors, setErrors] = useState<any>();
  const validation = () => {
    let err = {} as FormValue;

    if (formValue.rating === "") {
      err.rating = "Trường rating là bắt buộc!";
    }
    if (formValue.comment === "") {
      err.comment = "Trường cmt là bắt buộc!";
    }

    return err;
  };
  const addFeedback = (newFeedback: Feedback) => {
    setFeedbackData(prevFeedbackData => [
      ...prevFeedbackData,
      { ...formValue, feedback_id: "" } as Feedback,
    ]);
  };
  const createHandle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('createHandle called');
    console.log('formValue:', formValue);
    const err = validation();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      const form = new FormData();
      const user = UserProfile.getProfile();
      form.append("rating", formValue.rating);
      form.append("comment", formValue.comment);
      form.append("service_id", formValue.service_id);
      form.append("resident_id", formValue.resident_id);
      try {
        loadingFiler(document.body!);
        await axios.post(`/api/feedback/`, form);
        addFeedback({
          rating: formValue.rating, comment: formValue.comment,
          feedback_id: "",
          resident_id: user.id,
          service_id: params.id,
        });
        setFormValue({ rating: "", comment: "", resident_id: user.id, service_id: params.id });
        removeLoadingFilter(document.body!);
        toastMessage({ type: "success", title: "Create successfully!" });
        window.location.reload();
      } catch (e) {
        console.log(e);
        removeLoadingFilter(document.body!);
        toastMessage({ type: "error", title: "Create faily!" });
      }
    }
  };
  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newObj = { ...formValue, [e.target.name]: e.target.value };
  //   setFormValue(newObj);
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({ ...prevState, [name]: value }));
  };
  const [showModal, setShowModal] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    setFormValue(prevState => ({ ...prevState, rating: newRating.toString() }));
  };
  const handleModalOpen = () => {
    setShowModal(true);
  };
  const handleConfirmDelete = async (id: string) => {
    setShowModalDelete(false);
    try {
      await axios.delete(`/api/feedback/${id}`);
      toastMessage({ type: "success", title: "Delete successfully!" });
      window.location.reload();
    } catch (err) {
      toastMessage({ type: "error", title: "Delete faily!" });
      console.log(err);
    }
  };
  const handleModalClose = async () => {
    setShowModal(false);
    await refetch();
  };
  const { isLoading, data, isError, refetch } = useQuery(
    "service",
    () =>
      axios.get("/api/service/" + params.id).then((res) => res.data as Service),
    {
      refetchOnWindowFocus: false,
    }
  );
  // const { } = useQuery(
  //   "feedback",
  //   retrieveFeedback,
  //   {
  //     staleTime: Infinity,
  //   }
  // );
  useEffect(() => {
    retrieveFeedback();
  }, []);
  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     const user = await UserProfile.getProfile();
  //     setFormValue(prevState => ({ ...prevState, resident_id: user.id }));
  //   };
  //   fetchUserProfile();
  //   setFormValue(prevState => ({ ...prevState, service_id: params.id }));
  // }, []);
  if (data != null) {
    return (
      <main className={styles.main} style={futuna.style}>
        <div>
          <Container className="p-lg-5">
            <Row>
              <Col>
                <h3>
                  <b>{data.name}</b>
                </h3>
                {/* <p className="">{data.address}</p> */}
              </Col>
              <Col className="text-end">
                <Button variant="warning">Edit</Button>{" "}
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Carousel>
                {data.imageURLs && data.imageURLs.length > 0 ? (
                  data.imageURLs.map((value, index) => (
                    <Carousel.Item key={index} style={{ height: "500px" }}>
                      <Image
                        loading="lazy"
                        className=" img-fluid h-100 w-100"
                        src={value}
                        alt="images"
                        rounded
                      ></Image>
                    </Carousel.Item>
                  ))
                ) : (
                  <Carousel.Item style={{ height: "500px" }}>
                    <Image
                      loading="lazy"
                      className=" img-fluid h-100 w-100"
                      src={
                        "https://imgs.search.brave.com/2ec7dbMPC48d2bieXN1dJNsWbdhSFZ3lmUSPNwScvCQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mdW55/bGlmZS5pbi93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wNC84/MF9DdXRlLUdpcmwt/UGljLVdXVy5GVU5Z/TElGRS5JTl8tMS0x/MDI0eDEwMjQuanBn"
                      }
                      alt="images"
                      rounded
                    ></Image>
                  </Carousel.Item>
                )}
              </Carousel>
            </Row>
            <Row>
              <h3 style={{ marginTop: "20px" }}>
                <b>Description</b>
              </h3>
              <p style={{ marginTop: "20px" }}>{data.description}</p>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h3>
                  <b>Service Packages</b>
                </h3>
              </Col>
              <Col md="auto">
                <Button onClick={handleModalOpen}>Add</Button>
                <ServicePackageModal
                  show={showModal}
                  successMessage="Add service package successfully!"
                  serviceId={params.id}
                  handleClose={handleModalClose}
                />
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "rgba(40, 100, 255, 0.1)",
                border: "1px black solid",
                borderRadius: "20px",
                margin: "20px 0px",
                paddingTop: "20px ",
              }}
            >
              {data.servicePackages ? (
                data.servicePackages.map((value, index) => (
                  <>
                    {index % 2 == 0 ? <Row></Row> : <></>}
                    <Col>
                      {" "}
                      <ServicePackage
                        name={value.name}
                        per_unit_price={value.per_unit_price}
                        expired_date={value.expired_date}
                      ></ServicePackage>
                    </Col>
                    {index == data.servicePackages.length - 1 &&
                      index % 2 == 0 ? (
                      <Col></Col>
                    ) : (
                      <></>
                    )}
                  </>
                ))
              ) : (
                <></>
              )}
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h3>
                  <b>Feedback</b>
                </h3>
              </Col>
            </Row>
            {/* <Col md="auto">
            <ButtonComponent href="/home/feedback?auth=true" className={styles.creatBtn1}>
              Commnent
            </ButtonComponent>
              </Col> */}

            <Row style={{
              backgroundColor: "rgba(40, 100, 255, 0.1)",
              border: "1px black solid",
              borderRadius: "20px",
              margin: "20px 0px",
              paddingTop: "20px ",
            }}
            >
              <StarRatings
                rating={rating}
                starRatedColor="gold"
                starHoverColor="gold"
                changeRating={handleRatingChange}
                numberOfStars={5}
                starDimension="30px"
                starSpacing="5px"
              />
              <Form.Group className="mb-3">
                <Form.Label className={styles.label}>Comment</Form.Label>
                <Form.Control
                  size="lg"
                  type="text"
                  name="comment"
                  onChange={handleChange}
                  value={formValue.comment}
                  placeholder=""
                />
                {errors && errors.comment && (
                  <span className={styles.error}>{errors.comment}</span>
                )}
              </Form.Group>
              <ButtonComponent onClick={createHandle} className={styles.creatBtn1}>
                Tạo
              </ButtonComponent>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col>
                <h3>
                  <b>Comment</b>
                </h3>
              </Col>
            </Row>
            {feedbackData
              .filter(feedback => feedback.service_id === params.id)
              .map((feedback, index) => (
                <Row
                  key={index}
                  style={{
                    backgroundColor: "rgba(40, 100, 255, 0.1)",
                    border: "1px black solid",
                    borderRadius: "20px",
                    margin: "20px 0px",
                    paddingTop: "20px",
                  }}
                >
                  <div>
                    <p>Resident: {feedback.resident_id}</p>
                    <p>Rating: {feedback.rating}</p>
                    <p>Comment: {feedback.comment}</p>
                    <p>Service: {feedback.service_id}</p>
                  </div>
                  <Col md="auto">
                    {(UserProfile.getRole() === "resident" && UserProfile.getProfile().id === feedback.resident_id) || UserProfile.getRole() === "admin" ? (
                      <ButtonComponent
                        onClick={() => deleleHandle(feedback.feedback_id)}
                        className={classNames(
                          styles.deleteBtn
                        )}
                      >
                        Xóa
                      </ButtonComponent>
                    ) : (
                      <></>
                    )}


                  </Col>

                </Row>

              ))}
          </Container>
        </div>
        <ModalComponent
          show={showModalDelete}
          title="Có chắc chắn xóa feedback này?"
          handleConfirm={() => handleConfirmDelete(selectedId)}
          setShow={setShowModalDelete}
        />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </main>
    );
  }

  if (isLoading)
    return (
      <main className={styles.main} style={futuna.style}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            margin: "50px 0px",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Spinner></Spinner>
        </div>
      </main>
    );
  if (isError)
    return (
      <main className={styles.main} style={futuna.style}>
        <div
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          Co loi
        </div>
      </main>
    );
  return <div></div>;
}
