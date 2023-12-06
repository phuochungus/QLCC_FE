import Image from "next/image";
import { Images } from "../../../public/images";
import { BuildingIcon, ManagerIcon, StaffIcon, TechnicianIcon } from "@/components/icons";

export const sidebarInfo = [
  {
    title: "Dashboard",
    path: "dashboard",
    svg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.6855 4.44444V8.88889H26.8464V4.44444H35.6855ZM13.5877 4.44444V17.7778H4.74865V4.44444H13.5877ZM35.6855 22.2222V35.5556H26.8464V22.2222H35.6855ZM13.5877 31.1111V35.5556H4.74865V31.1111H13.5877ZM40.105 0H22.4268V13.3333H40.105V0ZM18.0073 0H0.329102V22.2222H18.0073V0ZM40.105 17.7778H22.4268V40H40.105V17.7778ZM18.0073 26.6667H0.329102V40H18.0073V26.6667Z"
          fill="black"
        />
      </svg>
    ),
    menu: [],
    roles: [],
  },
  {
    title: "Properties",
    path: "properties",
    svg: (
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_382_1569)">
          <path
            d="M31.1666 27.4997H34.8333V31.1663H31.1666V27.4997ZM31.1666 20.1663H34.8333V23.833H31.1666V20.1663ZM31.1666 12.833H34.8333V16.4997H31.1666V12.833ZM25.1899 12.833L27.4999 14.373V12.833H25.1899Z"
            fill="black"
          />
          <path
            d="M18.3333 5.5V8.26833L21.9999 10.7067V9.16667H38.4999V34.8333H31.1666V38.5H42.1666V5.5H18.3333Z"
            fill="black"
          />
          <path
            d="M14.9783 10.4502L27.4999 18.7919V38.5002H1.83325V19.2135L14.9783 10.4502ZM18.3333 34.8335H23.8333V20.4602L14.9783 14.8319L5.49992 20.8635V34.8335H10.9999V23.8335H18.3333V34.8335Z"
            fill="black"
          />
        </g>
        <defs>
          <clipPath id="clip0_382_1569">
            <rect width="44" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    menu: [
      {
        title: "Apartment",
        href: "/home/properties/apartments",
      },
      {
        title: "Vehicle",
        href: "/home/properties/vehicles",
      },
      {
        title: "Equipment",
        href: "/home/properties/equipments",
      },
    ],
    roles: ["admin", "manager"],
  },
  {
    title: "Service",
    path: "service",
    svg: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.6666 3.33301V5.33822C25.4292 5.64001 24.3328 6.15826 23.5416 6.97559L21.9498 6.05762L20.2831 8.94173L21.9628 9.91178C21.8169 10.4915 21.6666 11.0739 21.6666 11.6663C21.6666 12.2588 21.8169 12.8411 21.9628 13.4209L20.2831 14.391L21.9498 17.2751L23.5416 16.3571C24.3328 17.1744 25.4292 17.6927 26.6666 17.9945V19.9997H29.9999V17.9945C31.2373 17.6927 32.3338 17.1744 33.1249 16.3571L34.7167 17.2751L36.3834 14.391L34.7037 13.4209C34.8496 12.8411 34.9999 12.2588 34.9999 11.6663C34.9999 11.0739 34.8496 10.4915 34.7037 9.91178L36.3834 8.94173L34.7167 6.05762L33.1249 6.97559C32.3338 6.15826 31.2373 5.64001 29.9999 5.33822V3.33301H26.6666ZM28.3333 8.33301C29.5833 8.33301 30.3086 8.74175 30.8365 9.33561C31.3644 9.92948 31.6666 10.7867 31.6666 11.6663C31.6666 12.546 31.3644 13.4032 30.8365 13.9971C30.3086 14.5909 29.5833 14.9997 28.3333 14.9997C27.0833 14.9997 26.3579 14.5909 25.83 13.9971C25.3021 13.4032 24.9999 12.546 24.9999 11.6663C24.9999 10.7867 25.3021 9.92948 25.83 9.33561C26.3579 8.74175 27.0833 8.33301 28.3333 8.33301ZM11.6666 16.6663V18.6683C9.81548 19.022 8.17344 19.7534 7.08651 20.9762C7.05457 21.0122 7.04607 21.0603 7.01489 21.0967L5.50773 20.2243L3.84106 23.1084L5.44588 24.0361C5.18367 24.8938 4.99992 25.7767 4.99992 26.6663C4.99992 27.556 5.18367 28.4389 5.44588 29.2966L3.84106 30.2243L5.50773 33.1084L7.01489 32.236C7.04607 32.2724 7.05457 32.3205 7.08651 32.3564C8.17344 33.5792 9.81548 34.3107 11.6666 34.6644V36.6663H14.9999V34.6644C16.851 34.3107 18.4931 33.5793 19.58 32.3564C19.6119 32.3205 19.6204 32.2724 19.6516 32.236L21.1588 33.1084L22.8254 30.2243L21.2206 29.2966C21.4828 28.4389 21.6666 27.556 21.6666 26.6663C21.6666 25.7767 21.4828 24.8938 21.2206 24.0361L22.8254 23.1084L21.1588 20.2243L19.6516 21.0967C19.6204 21.0603 19.6119 21.0122 19.58 20.9762C18.4931 19.7534 16.851 19.022 14.9999 18.6683V16.6663H11.6666ZM13.3333 21.6663C15.1388 21.6663 16.2809 22.2834 17.0865 23.1898C17.8922 24.0961 18.3333 25.37 18.3333 26.6663C18.3333 27.9626 17.8922 29.2365 17.0865 30.1429C16.2809 31.0493 15.1388 31.6663 13.3333 31.6663C11.5277 31.6663 10.3857 31.0493 9.58 30.1429C8.77434 29.2365 8.33325 27.9626 8.33325 26.6663C8.33325 25.37 8.77434 24.0961 9.58 23.1898C10.3857 22.2834 11.5277 21.6663 13.3333 21.6663ZM13.3333 24.9997C12.8912 24.9997 12.4673 25.1753 12.1547 25.4878C11.8422 25.8004 11.6666 26.2243 11.6666 26.6663C11.6666 27.1084 11.8422 27.5323 12.1547 27.8449C12.4673 28.1574 12.8912 28.333 13.3333 28.333C13.7753 28.333 14.1992 28.1574 14.5118 27.8449C14.8243 27.5323 14.9999 27.1084 14.9999 26.6663C14.9999 26.2243 14.8243 25.8004 14.5118 25.4878C14.1992 25.1753 13.7753 24.9997 13.3333 24.9997Z"
          fill="black"
        />
      </svg>
    ),
    menu: [],
    roles: ["admin", "manager", "resident"],
  },
  {
    title: "Employee",
    svg: <StaffIcon width={30} height={30} />,
    roles: ["admin", "manager"],
  },
  {
    title: "Contracts",
    path: "contracts",
    svg: <Image src={Images.Residents} alt="icon" width={30} height={30} />,
    roles: ["admin", "manager"],
  },
  {
    title: "Residents",
    path: "residents",
    svg: <Image src={Images.Residents} alt="icon" width={30} height={30} />,
    roles: ["admin", "manager"],
  },{
    title: "Managers",
    path: "managers",
    svg: <ManagerIcon width={30} height={30} />,
    roles: ["admin"],
  },{
    title: "Technicians",
    path: "technicians",
    svg: <TechnicianIcon width={30} height={30} />,
    roles: ["admin"],
  },
  {
    title: "Buildings",
    path: "buildings",
    svg: <BuildingIcon width={30} height={30} />,
    roles: ["admin"],
  },
  {
    title: "Complain & repair requests",
    path: "complain",
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8691 0L13.8965 5.04688C12.2612 5.66851 10.7596 6.53986 9.44386 7.62891L4.63474 5.95703L0 14.043L3.85195 17.418C3.70387 18.3344 3.62719 19.1837 3.62719 20C3.62719 20.8175 3.70617 21.6653 3.85195 22.582V22.5859L0 25.9609L4.63474 34.043L9.43998 32.375C10.7559 33.4646 12.2609 34.3311 13.8965 34.9531L14.8691 40H24.1309L25.1035 34.9531C26.7398 34.3311 28.2398 33.4611 29.5561 32.3711L34.3653 34.043L38.9961 25.9609L35.1481 22.582C35.2961 21.6656 35.3728 20.8163 35.3728 20C35.3728 19.1849 35.2957 18.3367 35.1481 17.4219V17.418L39 14.0391L34.3653 5.95703L29.56 7.625C28.2441 6.53536 26.7391 5.66887 25.1035 5.04688L24.1309 0H14.8691ZM18.1398 4H20.8602L21.6314 8L23.7007 8.78906C24.9481 9.26294 26.0687 9.91351 27.0411 10.7188L28.754 12.1328L32.5672 10.8125L33.9274 13.1836L30.8815 15.8555L31.2302 18.0547V18.0586C31.3516 18.8085 31.4046 19.4375 31.4046 20C31.4046 20.5625 31.3516 21.1914 31.2302 21.9414L30.8776 24.1406L33.9235 26.8125L32.5633 29.1875L28.754 27.8633L27.0373 29.2812C26.0648 30.0865 24.9481 30.7371 23.7007 31.2109H23.6968L21.6275 32L20.8563 36H18.1398L17.3686 32L15.2993 31.2109C14.0519 30.7371 12.9313 30.0865 11.9589 29.2812L10.246 27.8672L6.43283 29.1875L5.07264 26.8164L8.12242 24.1406L7.76977 21.9492V21.9453C7.65019 21.1922 7.59539 20.5613 7.59539 20C7.59539 19.4375 7.64845 18.8086 7.76977 18.0586L8.12242 15.8594L5.07264 13.1875L6.43283 10.8125L10.246 12.1367L11.9589 10.7188C12.9313 9.91351 14.0519 9.26294 15.2993 8.78906L17.3686 8L18.1398 4ZM19.5 12C15.1419 12 11.5636 15.607 11.5636 20C11.5636 24.393 15.1419 28 19.5 28C23.8581 28 27.4364 24.393 27.4364 20C27.4364 15.607 23.8581 12 19.5 12ZM19.5 16C21.7053 16 23.4682 17.777 23.4682 20C23.4682 22.223 21.7053 24 19.5 24C17.2947 24 15.5318 22.223 15.5318 20C15.5318 17.777 17.2947 16 19.5 16Z"
          fill="black"
        />
      </svg>
    ),
    menu: [],
    roles: ["admin", "manager"],
  },
  {
    title: "Send Complain & repair requests",
    path: "complainResident",
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8691 0L13.8965 5.04688C12.2612 5.66851 10.7596 6.53986 9.44386 7.62891L4.63474 5.95703L0 14.043L3.85195 17.418C3.70387 18.3344 3.62719 19.1837 3.62719 20C3.62719 20.8175 3.70617 21.6653 3.85195 22.582V22.5859L0 25.9609L4.63474 34.043L9.43998 32.375C10.7559 33.4646 12.2609 34.3311 13.8965 34.9531L14.8691 40H24.1309L25.1035 34.9531C26.7398 34.3311 28.2398 33.4611 29.5561 32.3711L34.3653 34.043L38.9961 25.9609L35.1481 22.582C35.2961 21.6656 35.3728 20.8163 35.3728 20C35.3728 19.1849 35.2957 18.3367 35.1481 17.4219V17.418L39 14.0391L34.3653 5.95703L29.56 7.625C28.2441 6.53536 26.7391 5.66887 25.1035 5.04688L24.1309 0H14.8691ZM18.1398 4H20.8602L21.6314 8L23.7007 8.78906C24.9481 9.26294 26.0687 9.91351 27.0411 10.7188L28.754 12.1328L32.5672 10.8125L33.9274 13.1836L30.8815 15.8555L31.2302 18.0547V18.0586C31.3516 18.8085 31.4046 19.4375 31.4046 20C31.4046 20.5625 31.3516 21.1914 31.2302 21.9414L30.8776 24.1406L33.9235 26.8125L32.5633 29.1875L28.754 27.8633L27.0373 29.2812C26.0648 30.0865 24.9481 30.7371 23.7007 31.2109H23.6968L21.6275 32L20.8563 36H18.1398L17.3686 32L15.2993 31.2109C14.0519 30.7371 12.9313 30.0865 11.9589 29.2812L10.246 27.8672L6.43283 29.1875L5.07264 26.8164L8.12242 24.1406L7.76977 21.9492V21.9453C7.65019 21.1922 7.59539 20.5613 7.59539 20C7.59539 19.4375 7.64845 18.8086 7.76977 18.0586L8.12242 15.8594L5.07264 13.1875L6.43283 10.8125L10.246 12.1367L11.9589 10.7188C12.9313 9.91351 14.0519 9.26294 15.2993 8.78906L17.3686 8L18.1398 4ZM19.5 12C15.1419 12 11.5636 15.607 11.5636 20C11.5636 24.393 15.1419 28 19.5 28C23.8581 28 27.4364 24.393 27.4364 20C27.4364 15.607 23.8581 12 19.5 12ZM19.5 16C21.7053 16 23.4682 17.777 23.4682 20C23.4682 22.223 21.7053 24 19.5 24C17.2947 24 15.5318 22.223 15.5318 20C15.5318 17.777 17.2947 16 19.5 16Z"
          fill="black"
        />
      </svg>
    ),
    menu: [],
    roles: ["resident"],
  },
  {
    title: "Tasks",
    path: "taskTechnician",
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8691 0L13.8965 5.04688C12.2612 5.66851 10.7596 6.53986 9.44386 7.62891L4.63474 5.95703L0 14.043L3.85195 17.418C3.70387 18.3344 3.62719 19.1837 3.62719 20C3.62719 20.8175 3.70617 21.6653 3.85195 22.582V22.5859L0 25.9609L4.63474 34.043L9.43998 32.375C10.7559 33.4646 12.2609 34.3311 13.8965 34.9531L14.8691 40H24.1309L25.1035 34.9531C26.7398 34.3311 28.2398 33.4611 29.5561 32.3711L34.3653 34.043L38.9961 25.9609L35.1481 22.582C35.2961 21.6656 35.3728 20.8163 35.3728 20C35.3728 19.1849 35.2957 18.3367 35.1481 17.4219V17.418L39 14.0391L34.3653 5.95703L29.56 7.625C28.2441 6.53536 26.7391 5.66887 25.1035 5.04688L24.1309 0H14.8691ZM18.1398 4H20.8602L21.6314 8L23.7007 8.78906C24.9481 9.26294 26.0687 9.91351 27.0411 10.7188L28.754 12.1328L32.5672 10.8125L33.9274 13.1836L30.8815 15.8555L31.2302 18.0547V18.0586C31.3516 18.8085 31.4046 19.4375 31.4046 20C31.4046 20.5625 31.3516 21.1914 31.2302 21.9414L30.8776 24.1406L33.9235 26.8125L32.5633 29.1875L28.754 27.8633L27.0373 29.2812C26.0648 30.0865 24.9481 30.7371 23.7007 31.2109H23.6968L21.6275 32L20.8563 36H18.1398L17.3686 32L15.2993 31.2109C14.0519 30.7371 12.9313 30.0865 11.9589 29.2812L10.246 27.8672L6.43283 29.1875L5.07264 26.8164L8.12242 24.1406L7.76977 21.9492V21.9453C7.65019 21.1922 7.59539 20.5613 7.59539 20C7.59539 19.4375 7.64845 18.8086 7.76977 18.0586L8.12242 15.8594L5.07264 13.1875L6.43283 10.8125L10.246 12.1367L11.9589 10.7188C12.9313 9.91351 14.0519 9.26294 15.2993 8.78906L17.3686 8L18.1398 4ZM19.5 12C15.1419 12 11.5636 15.607 11.5636 20C11.5636 24.393 15.1419 28 19.5 28C23.8581 28 27.4364 24.393 27.4364 20C27.4364 15.607 23.8581 12 19.5 12ZM19.5 16C21.7053 16 23.4682 17.777 23.4682 20C23.4682 22.223 21.7053 24 19.5 24C17.2947 24 15.5318 22.223 15.5318 20C15.5318 17.777 17.2947 16 19.5 16Z"
          fill="black"
        />
      </svg>
    ),
    menu: [],
    roles: ["technician"],
  },
  {
    title: "Facility",
    svg: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8691 0L13.8965 5.04688C12.2612 5.66851 10.7596 6.53986 9.44386 7.62891L4.63474 5.95703L0 14.043L3.85195 17.418C3.70387 18.3344 3.62719 19.1837 3.62719 20C3.62719 20.8175 3.70617 21.6653 3.85195 22.582V22.5859L0 25.9609L4.63474 34.043L9.43998 32.375C10.7559 33.4646 12.2609 34.3311 13.8965 34.9531L14.8691 40H24.1309L25.1035 34.9531C26.7398 34.3311 28.2398 33.4611 29.5561 32.3711L34.3653 34.043L38.9961 25.9609L35.1481 22.582C35.2961 21.6656 35.3728 20.8163 35.3728 20C35.3728 19.1849 35.2957 18.3367 35.1481 17.4219V17.418L39 14.0391L34.3653 5.95703L29.56 7.625C28.2441 6.53536 26.7391 5.66887 25.1035 5.04688L24.1309 0H14.8691ZM18.1398 4H20.8602L21.6314 8L23.7007 8.78906C24.9481 9.26294 26.0687 9.91351 27.0411 10.7188L28.754 12.1328L32.5672 10.8125L33.9274 13.1836L30.8815 15.8555L31.2302 18.0547V18.0586C31.3516 18.8085 31.4046 19.4375 31.4046 20C31.4046 20.5625 31.3516 21.1914 31.2302 21.9414L30.8776 24.1406L33.9235 26.8125L32.5633 29.1875L28.754 27.8633L27.0373 29.2812C26.0648 30.0865 24.9481 30.7371 23.7007 31.2109H23.6968L21.6275 32L20.8563 36H18.1398L17.3686 32L15.2993 31.2109C14.0519 30.7371 12.9313 30.0865 11.9589 29.2812L10.246 27.8672L6.43283 29.1875L5.07264 26.8164L8.12242 24.1406L7.76977 21.9492V21.9453C7.65019 21.1922 7.59539 20.5613 7.59539 20C7.59539 19.4375 7.64845 18.8086 7.76977 18.0586L8.12242 15.8594L5.07264 13.1875L6.43283 10.8125L10.246 12.1367L11.9589 10.7188C12.9313 9.91351 14.0519 9.26294 15.2993 8.78906L17.3686 8L18.1398 4ZM19.5 12C15.1419 12 11.5636 15.607 11.5636 20C11.5636 24.393 15.1419 28 19.5 28C23.8581 28 27.4364 24.393 27.4364 20C27.4364 15.607 23.8581 12 19.5 12ZM19.5 16C21.7053 16 23.4682 17.777 23.4682 20C23.4682 22.223 21.7053 24 19.5 24C17.2947 24 15.5318 22.223 15.5318 20C15.5318 17.777 17.2947 16 19.5 16Z"
          fill="black"
        />
      </svg>
    ),
    menu: [],
    roles: ["admin", "manager", "technician"],
  },
  {
    title: "Floor",
    svg: (
      <svg
        width="50"
        height="50"
        viewBox="0 -10 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 2v18h3v-1H3v-6h3V9h5V8H6V3h15v5h-6v1h6v5h-4v1h4v6H11v-7h-1v5H8v1h2v2h12V2zm3 4H3V5h2zm-2 6v-1h2v1zm2-2H3V9h2zM3 8V7h2v1zm2-4H3V3h2z"
          fill="black"
          stroke="black" 
          stroke-width="1" 
        />
        
      </svg>
    ),
    menu: [],
    roles: [],
  },
];
