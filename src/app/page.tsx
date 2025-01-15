import Image from "next/image";

export default function Home() {
  return (
    <div className="px-40 flex flex-1 justify-center py-5 bg-[#fcf8f9] rounded-b-lg">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/686c5532-7ccf-47ea-b47b-649ac27e4650.png")',
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                  Welcome to Yakira Beauty Salon
                </h1>
                <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                  We are a full-service salon offering an array of services. Our
                  team of experts is committed to providing you the best salon
                  experience.
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e6195d] text-[#fcf8f9] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                <span className="truncate">Book an appointment</span>
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-[#1b0e12] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Our Ethos
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0d7] bg-[#fcf8f9] p-4 flex-col">
            <div
              className="text-[#1b0e12]"
              data-icon="Heart"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e12] text-base font-bold leading-tight">
                Quality
              </h2>
              <p className="text-[#974e67] text-sm font-normal leading-normal">
                We're committed to providing high-quality services and products
                that meet your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0d7] bg-[#fcf8f9] p-4 flex-col">
            <div
              className="text-[#1b0e12]"
              data-icon="Check"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e12] text-base font-bold leading-tight">
                Experience
              </h2>
              <p className="text-[#974e67] text-sm font-normal leading-normal">
                Our skilled team members have years of experience and training
                in their respective fields.
              </p>
            </div>
          </div>
          <div className="flex flex-1 gap-3 rounded-lg border border-[#e7d0d7] bg-[#fcf8f9] p-4 flex-col">
            <div
              className="text-[#1b0e12]"
              data-icon="Gift"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M216,72H180.92c.39-.33.79-.65,1.17-1A29.53,29.53,0,0,0,192,49.57,32.62,32.62,0,0,0,158.44,16,29.53,29.53,0,0,0,137,25.91a54.94,54.94,0,0,0-9,14.48,54.94,54.94,0,0,0-9-14.48A29.53,29.53,0,0,0,97.56,16,32.62,32.62,0,0,0,64,49.57,29.53,29.53,0,0,0,73.91,71c.38.33.78.65,1.17,1H40A16,16,0,0,0,24,88v32a16,16,0,0,0,16,16v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136a16,16,0,0,0,16-16V88A16,16,0,0,0,216,72ZM149,36.51a13.69,13.69,0,0,1,10-4.5h.49A16.62,16.62,0,0,1,176,49.08a13.69,13.69,0,0,1-4.5,10c-9.49,8.4-25.24,11.36-35,12.4C137.7,60.89,141,45.5,149,36.51Zm-64.09.36A16.63,16.63,0,0,1,96.59,32h.49a13.69,13.69,0,0,1,10,4.5c8.39,9.48,11.35,25.2,12.39,34.92-9.72-1-25.44-4-34.92-12.39a13.69,13.69,0,0,1-4.5-10A16.6,16.6,0,0,1,84.87,36.87ZM40,88h80v32H40Zm16,48h64v64H56Zm144,64H136V136h64Zm16-80H136V88h80v32Z"></path>
              </svg>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-[#1b0e12] text-base font-bold leading-tight">
                Community
              </h2>
              <p className="text-[#974e67] text-sm font-normal leading-normal">
                We're dedicated to building strong relationships with our
                clients and giving back to the community.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[#1b0e12] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Featured Services
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/a59d667f-e894-4ae5-8375-aa031968b477.png")',
                height: "150px",
              }}
            ></div>
            <div>
              <p className="text-[#1b0e12] text-base font-medium leading-normal">
                Hair
              </p>
              <p className="text-[#974e67] text-xs font-normal leading-normal">
                Cut, color, style, and more
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/b0a584a5-77c9-4779-9902-b69e53483a30.png")',
                height: "150px",
              }}
            ></div>
            <div>
              <p className="text-[#1b0e12] text-base font-medium leading-normal">
                Nails
              </p>
              <p className="text-[#974e67] text-xs font-normal leading-normal">
                Manicures, pedicures, and more
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/f0f257a0-8e55-4747-81a3-b49fbf616832.png")',
                height: "150px",
              }}
            ></div>
            <div>
              <p className="text-[#1b0e12] text-base font-medium leading-normal">
                Skin
              </p>
              <p className="text-[#974e67] text-xs font-normal leading-normal">
                Facials, waxing, and more
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[#1b0e12] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Customer Reviews
        </h2>
        <div className="flex flex-col gap-8 overflow-x-hidden bg-[#fcf8f9] p-4">
          <div className="flex flex-col gap-3 bg-[#fcf8f9]">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/e5c51caa-c903-4aff-b973-412a89b38370.png")',
                }}
              ></div>
              <div className="flex-1">
                <p className="text-[#1b0e12] text-base font-medium leading-normal">
                  Cassie L.
                </p>
                <p className="text-[#974e67] text-sm font-normal leading-normal">
                  June 1, 2022
                </p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
            </div>
            <p className="text-[#1b0e12] text-base font-normal leading-normal">
              I'm so happy with my haircut and highlights! The stylist really
              listened to what I wanted and took her time to make sure
              everything was perfect. The salon is beautiful, and the staff is
              friendly and professional. I'll definitely be back!
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-[#fcf8f9]">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/3bcb4a13-a797-4480-b43d-dfe101c8ef09.png")',
                }}
              ></div>
              <div className="flex-1">
                <p className="text-[#1b0e12] text-base font-medium leading-normal">
                  Jenny P.
                </p>
                <p className="text-[#974e67] text-sm font-normal leading-normal">
                  May 25, 2022
                </p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
            </div>
            <p className="text-[#1b0e12] text-base font-normal leading-normal">
              The best pedicure I've ever had! The technician did a great job
              and made me feel comfortable. The salon is clean and relaxing, and
              the prices are reasonable. I highly recommend this place!
            </p>
          </div>
          <div className="flex flex-col gap-3 bg-[#fcf8f9]">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/1f7987f4-ddd0-4ed2-b940-830ac30c8c96.png")',
                }}
              ></div>
              <div className="flex-1">
                <p className="text-[#1b0e12] text-base font-medium leading-normal">
                  Sarah T.
                </p>
                <p className="text-[#974e67] text-sm font-normal leading-normal">
                  May 20, 2022
                </p>
              </div>
            </div>
            <div className="flex gap-0.5">
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
              <div
                className="text-[#e6195d]"
                data-icon="Star"
                data-size="20px"
                data-weight="fill"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"></path>
                </svg>
              </div>
            </div>
            <p className="text-[#1b0e12] text-base font-normal leading-normal">
              I had a facial here, and it was amazing! The esthetician used
              high-quality products and gave me personalized recommendations for
              my skin. The atmosphere was tranquil, and the service was
              top-notch. I can't wait to try more treatments!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
