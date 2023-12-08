"use client";
import { useTranslation } from "react-i18next";
import classNames from 'classnames';
import residentStyles from "@/app/home/residents/resident.module.scss";
import styles from "../page.module.css";
import buildingStyles from "./floor.module.scss";
import utilStyles from "@/styles/utils.module.scss";
import clsx from "clsx";
import { createRef, useRef, useState } from "react";
import { futuna } from "../../../../public/fonts/futura";
import ButtonComponent from "@/components/buttonComponent/buttonComponent";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ModalComponent from "@/components/Modal/Modal";
import SearchLayout from "@/components/searchLayout/searchLayout";
import { CloseIcon, DetailIcon, EditIcon } from "@/components/icons";
import { format } from "date-fns";
import { Building } from "@/models/building";
import { Floor } from "@/models/floor";
import pageStyles from "@/styles/page.module.scss";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-bootstrap/lib/Navbar";
import { loadingFiler, removeLoadingFilter } from "@/libs/utils";
import toastMessage from "@/utils/toast";
import { ToastContainer } from "react-toastify";
export default function Dashboard() {
  const [t, i18n] = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [floor, setFloor] = useState<Array<Floor>>([]);
  const [selectedId, setSelectedId] = useState("");
  const searchRef = createRef<HTMLInputElement>();
  const titleTable = ["ID", "Tầng", "Tòa", "Số phòng"];
  const [totalPages, setTotalPages] = useState(0);
  const [maxPageDisplay, setMaxPageDisplay] = useState(10);
  const listOptions = [
    {
      value: 10,
    },
    {
      value: 20,
    },
    {
      value: 50,
    },
    {
      value: 100,
    },
  ];
  const deleleHandle = (id: string) => {
    setSelectedId(id);
    setShowModal(true);
  };
  const retrieveFloor = async () => {
    try {
      loadingFiler(document.body!);
      const res = await axios.get("/api/floor");
      removeLoadingFilter(document.body!);
      const floorData = res.data;
      const data = res.data;
      setFloor(data.items);
      setTotalPages(data.meta.totalPages);
      return res.data;
    } catch (error) {
      removeLoadingFilter(document.body!);
      console.log(error);
    }
  };
  const pagination = async (page?: number, limit?: number) => {
    try {
      console.log(page, limit);
      loadingFiler(document.body!);
      const res = await axios.get("/api/floor", {
        params: {
          page,
          limit,
        },
      });
      removeLoadingFilter(document.body!);
      const data = res.data;
      setFloor(data.items);
      console.log(totalPages);
      setTotalPages(data.meta.totalPages);
      return res.data;
    } catch (error) {
      removeLoadingFilter(document.body!);

      console.log(error);
    }
  };
  const { isLoading, isError, data, refetch } = useQuery(
    "floor",
    retrieveFloor,
    {
      staleTime: Infinity,
    }
  );
  const handleSearch = async (e: any) => {
    if (e.key === "Enter") {
      const res = await axios.get("/api/floor/search", {
        params: {
          query: searchRef.current?.value,
        },
      });
      setFloor(res.data);
    }
  };
  // const handleConfirmDelete = async (id: string) => {
  //   setShowModal(false);
  //   try {
  //     await axios.delete(`/api/building/${id}`);
  //     toastMessage({ type: "success", title: "Delete successfully!" });
  //     refetch();
  //   } catch (err) {
  //     toastMessage({ type: "error", title: "Delete faily!" });
  //     console.log(err);
  //   }
  // };
  const [currentPage, setCurrentPage] = useState(1);
  const handleSetActive = (count: any) => {
    const limit: number = parseInt(count);
    setCurrentPage(1);
    setMaxPageDisplay(count);
    pagination(1, limit);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      pagination(currentPage - 1, maxPageDisplay);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      pagination(currentPage + 1, maxPageDisplay);
    }
  };
  const searchIconClick = async () => {
    const res = await axios.get("/api/floor/search", {
      params: {
        query: searchRef.current?.value,
      },
    });
    setFloor(res.data);
  };
  return (
    <main className={clsx(styles.main)}>
      <div className={clsx(buildingStyles.wrapper, futuna.className)}>
        <h1 className={clsx(utilStyles.headingXl, buildingStyles.title)}>
          Quản lí tầng
        </h1>
        <div className={clsx(buildingStyles.header)}>
          <h1 className={clsx(utilStyles.headingLg)}>Danh sách tầng</h1>
          <ButtonComponent
            href="/home/floor/addFloor?auth=true"
            //   preIcon={<AddResidentIcon width={24} height={24} />}
            className={clsx(buildingStyles.addBtn, futuna.className)}
          >
            Tạo tầng
          </ButtonComponent>
        </div>
        <div className="d-flex w-100 mt-3 justify-content-between">
          <div className={clsx(residentStyles.perPage)}>
            <span>Show</span>
            <span>
              <Form.Select
                onChange={(e) => handleSetActive(e.target.value)}
                aria-label="Default select example"
              >
                {listOptions.map(
                  (option, index): JSX.Element => (
                    <option
                      className={clsx({
                        [residentStyles.active]:
                          maxPageDisplay === option.value,
                      })}
                      key={index}
                      value={option.value}
                    >
                      {option.value}
                    </option>
                  )
                )}
              </Form.Select>
            </span>
            <span>Entries</span>
          </div>
          <SearchLayout
            onKeydown={handleSearch}
            iconClick={searchIconClick}
            className={buildingStyles.searchLayout}
            placeHolder="Tìm tầng..."
            ref={searchRef}
          />
        </div>

        <div className="w-100 mt-5">
          <Table
            className={clsx(buildingStyles.tableBuilding, futuna.className)}
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                {titleTable.map((title: String, index) => (
                  <th key={index}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {floor.map((floor, index): React.ReactNode => {
                return (
                  <tr key={index}>
                    <td style={{ width: "30%" }}>{floor.floor_id}</td>
                    <td style={{ width: "10%" }}>{floor.name}</td>
                    <td style={{ width: "20%" }}>{floor.building_id}</td>
                    <td style={{ width: "20%" }}>{floor.max_apartment}</td>

                    <td style={{ width: "17%" }}>
                      <div className="d-flex">
                        <ButtonComponent
                          preIcon={<EditIcon width={16} height={16} />}
                          className={clsx(
                            buildingStyles.cudBtn,
                            buildingStyles.editBtn
                          )}
                          href={`/home/floor/updateFloor/${floor.floor_id}/?auth=true`}
                        >
                          Sửa
                        </ButtonComponent>
                        <ButtonComponent
                          href={`/home/floor/detailFloor/${encodeURIComponent(floor.floor_id)}/?auth=true`}
                          preIcon={<DetailIcon width={16} height={16} />}
                          className={clsx(buildingStyles.cudBtn, buildingStyles.detailBtn)}
                        >
                          Chi tiết
                        </ButtonComponent>


                      </div>
                    </td>
                  </tr>

                );

              })}
            </tbody>
          </Table>
          <div className="d-flex w-100 mt-3 justify-content-center align-items-center">
            <div className={classNames(pageStyles.pageContainer, styles.changePageBtn)}>
              <ButtonComponent
                onClick={handlePrevPage}
                className={pageStyles.changePageBtn}
              >
                Previous
              </ButtonComponent>
              <p>
                {currentPage}/{totalPages}
              </p>
              <ButtonComponent
                onClick={handleNextPage}
                className={pageStyles.changePageBtn}
              >
                Next
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalComponent
        show={showModal}
        title="Có chắc chắn xóa tòa này?"
        handleConfirm={() => handleConfirmDelete(selectedId)}
        setShow={setShowModal}
      /> */}
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
