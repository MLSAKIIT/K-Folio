export default function ProfileBackground() {
    return (
        <div className="fixed inset-0 bg-black z-0 overflow-hidden ">

            {/* Top left*/}
            <svg
                className="
          absolute
          top-[-20%] left-[-25%]
        "
                width="951"
                height="1027"
                viewBox="0 0 951 1027"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_1510_198)">
                    <path
                        d="M578.264 422.349C463.016 675.475 117.841 766.054 -192.706 624.663C-503.252 483.271 -661.573 163.452 -546.325 -89.6745C-431.077 -342.801 -85.9026 -433.38 224.644 -291.988C535.191 -150.597 693.512 169.223 578.264 422.349Z"
                        fill="#001AFF"
                        fillOpacity="0.16"
                    />
                </g>
                <defs>
                    <filter id="filter0_f_1510_198" x="-918.96" y="-693.738" width="1869.86" height="1720.15">
                        <feGaussianBlur stdDeviation="167.5" />
                    </filter>
                </defs>
            </svg>

            {/* Middle right */}
            <svg className="
          absolute
          top-[40%] right-[-30%]
          -translate-y-1/2
          rotate-[-20deg]
        " width="863" height="1481" viewBox="0 0 863 1481" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_1545_45)">
                    <ellipse cx="888.5" cy="740.5" rx="553.5" ry="500.5" fill="#001AFF" fill-opacity="0.2" />
                </g>
                <defs>
                    <filter id="filter0_f_1545_45" x="0" y="0" width="1777" height="1481" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="167.5" result="effect1_foregroundBlur_1545_45" />
                    </filter>
                </defs>
            </svg>




        </div>
    );
}



