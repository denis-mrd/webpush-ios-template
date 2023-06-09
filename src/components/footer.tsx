import React from "react"

export const magicBellHandle = "magicbell_io"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 py-6">
      <div className="flex items-center justify-center gap-4">
        <span className="text-muted text-sm">powered by</span>
        <svg
          height="20"
          viewBox="0 0 624 121"
          fill="#F1A10D"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1815_54052)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.4819 100.26C21.1612 100.252 20.8434 100.323 20.5576 100.468C20.2718 100.612 20.027 100.825 19.8454 101.088C19.6639 101.35 19.5514 101.653 19.5181 101.97C19.4849 102.286 19.5321 102.606 19.6553 102.9V103.02C21.1919 106.369 23.3929 109.377 26.127 111.864C28.9668 114.462 32.28 116.498 35.889 117.864C39.5714 119.252 43.4778 119.964 47.4171 119.964C51.3565 119.964 55.2629 119.252 58.9453 117.864C62.5543 116.498 65.8675 114.462 68.7073 111.864C71.445 109.378 73.6501 106.37 75.1911 103.02V102.9C75.3177 102.606 75.3674 102.286 75.3356 101.968C75.3039 101.65 75.1917 101.345 75.0095 101.082C74.8273 100.818 74.5809 100.605 74.2934 100.461C74.0058 100.318 73.6863 100.248 73.3645 100.26H64.3404C63.9627 100.272 63.5931 100.372 63.2612 100.551C62.9293 100.73 62.6443 100.984 62.4291 101.292C61.7511 102.244 60.9725 103.121 60.1065 103.908C58.4185 105.444 56.4524 106.649 54.3122 107.46C52.126 108.267 49.8102 108.673 47.4776 108.66C45.145 108.673 42.8293 108.267 40.643 107.46C38.4991 106.635 36.5327 105.413 34.8487 103.86C33.9947 103.095 33.2206 102.247 32.5382 101.328C32.3292 101.017 32.0473 100.76 31.7165 100.58C31.3858 100.401 31.0161 100.303 30.639 100.296L21.4819 100.26Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M94.7772 84.24L91.4023 78.24C91.4023 78.24 91.2692 78.12 86.2854 69.18C82.4991 62.712 78.7854 54.528 78.7854 44.928V31.092C78.7854 30.576 78.7854 30.036 78.7854 29.496C78.7854 29.136 78.7854 28.752 78.7008 28.38C78.7008 28.272 78.7008 28.176 78.7008 28.068L85.5233 21.06C85.8949 20.6771 86.1596 20.2049 86.2913 19.6896C86.423 19.1744 86.4172 18.634 86.2743 18.1217C86.1315 17.6095 85.8566 17.1429 85.4767 16.7681C85.0969 16.3932 84.6251 16.123 84.108 15.984L72.8218 12.864C69.9326 8.87858 66.1281 5.6331 61.7233 3.39611C57.3184 1.15912 52.4398 -0.00502491 47.4913 1.63032e-05C39.9216 0.000768616 32.6095 2.72755 26.9138 7.67367C21.2181 12.6198 17.5261 19.4489 16.5238 26.892C16.4513 27.372 16.3666 27.852 16.3303 28.332C16.294 28.812 16.2456 29.088 16.2335 29.448C16.2335 29.988 16.2335 30.528 16.2335 31.044V44.88C16.2335 54.48 12.5319 62.664 8.73359 69.132C3.76186 78.072 3.6288 78.192 3.6288 78.192L0.253824 84.192C0.0602192 84.5093 -0.0436287 84.8724 -0.0468001 85.2433C-0.0499715 85.6142 0.0476508 85.979 0.235801 86.2995C0.423952 86.62 0.695679 86.8843 1.02241 87.0646C1.34914 87.2449 1.7188 87.3345 2.09252 87.324H92.9264C93.2926 87.3277 93.6534 87.236 93.9727 87.0581C94.292 86.8802 94.5587 86.6222 94.746 86.3101C94.9333 85.9979 95.0348 85.6425 95.0403 85.2792C95.0458 84.9159 94.9551 84.5576 94.7772 84.24ZM25.6205 73.86H23.0077C22.6416 73.8549 22.2829 73.7573 21.9654 73.5764C21.648 73.3956 21.3822 73.1374 21.1934 72.8263C21.0045 72.5152 20.8987 72.1614 20.8859 71.7985C20.8732 71.4355 20.954 71.0754 21.1206 70.752C22.3303 68.46 23.8302 65.256 24.8827 62.652C27.6044 55.452 27.677 49.272 27.677 43.368V33.192C27.677 24.996 34.3423 13.488 47.5155 13.488C50.2141 13.4159 52.8973 13.9136 55.3873 14.948C57.8774 15.9824 60.1174 17.5299 61.959 19.488C65.1366 22.9463 67.0384 27.3712 67.3541 32.04C67.3541 32.436 67.3541 32.808 67.3541 33.24C67.3904 71.28 31.2455 73.86 25.6205 73.86Z"
            />
            <path d="M594.211 10.7998H586.602C585.4 10.7998 584.425 11.7669 584.425 12.9598V85.2118C584.425 86.4047 585.4 87.3718 586.602 87.3718H594.211C595.414 87.3718 596.388 86.4047 596.388 85.2118V12.9598C596.388 11.7669 595.414 10.7998 594.211 10.7998Z" />
            <path d="M217.617 87.3721H210.008C209.431 87.3721 208.877 87.1445 208.468 86.7394C208.06 86.3344 207.831 85.785 207.831 85.2121V29.4601C207.829 29.3372 207.785 29.2185 207.707 29.1235C207.628 29.0286 207.519 28.9632 207.398 28.938C207.277 28.9128 207.15 28.9295 207.04 28.9851C206.929 29.0408 206.841 29.1321 206.79 29.2441L191.222 64.6801C191.055 65.0672 190.777 65.3968 190.421 65.6273C190.066 65.8579 189.65 65.9793 189.226 65.9761H180.117C179.695 65.9772 179.281 65.8564 178.927 65.6284C178.572 65.4004 178.293 65.0751 178.121 64.6921L162.238 29.0521C162.187 28.9401 162.099 28.8487 161.989 28.7931C161.878 28.7374 161.752 28.7209 161.631 28.746C161.51 28.7712 161.401 28.8366 161.322 28.9316C161.243 29.0265 161.199 29.1452 161.198 29.2681V85.2001C161.198 85.773 160.969 86.3223 160.56 86.7274C160.152 87.1325 159.598 87.3601 159.021 87.3601H151.412C150.834 87.3601 150.28 87.1325 149.872 86.7274C149.464 86.3223 149.234 85.773 149.234 85.2001V12.9481C149.238 12.3762 149.468 11.8286 149.876 11.4242C150.283 11.0198 150.835 10.7912 151.412 10.7881H165.722C166.146 10.788 166.56 10.9106 166.915 11.1408C167.269 11.371 167.549 11.6989 167.718 12.0841L184.109 49.0801C184.151 49.1782 184.22 49.262 184.31 49.321C184.399 49.3799 184.504 49.4113 184.611 49.4113C184.718 49.4113 184.823 49.3799 184.913 49.321C185.002 49.262 185.072 49.1782 185.113 49.0801L201.165 12.0961C201.336 11.7086 201.617 11.3787 201.974 11.1465C202.33 10.9143 202.747 10.7898 203.173 10.7881H217.617C218.194 10.7881 218.748 11.0157 219.157 11.4208C219.565 11.8258 219.794 12.3752 219.794 12.9481V85.2001C219.797 85.4852 219.743 85.7681 219.635 86.0322C219.527 86.2964 219.367 86.5366 219.164 86.7388C218.962 86.9409 218.721 87.1011 218.455 87.2098C218.189 87.3185 217.904 87.3737 217.617 87.3721Z" />
            <path d="M620.678 10.7998H613.069C611.866 10.7998 610.892 11.7669 610.892 12.9598V85.2118C610.892 86.4047 611.866 87.3718 613.069 87.3718H620.678C621.88 87.3718 622.855 86.4047 622.855 85.2118V12.9598C622.855 11.7669 621.88 10.7998 620.678 10.7998Z" />
            <path d="M507.84 59.0762C507.116 56.9323 505.973 54.9507 504.477 53.2442C502.878 51.467 500.958 50.0019 498.816 48.9242C498.258 48.6446 497.685 48.3962 497.098 48.1802C496.086 47.776 495.047 47.4393 493.99 47.1722C492.86 46.9921 491.721 46.8719 490.578 46.8122C490.543 46.8122 490.509 46.8054 490.477 46.7921C490.444 46.7788 490.415 46.7594 490.39 46.7349C490.365 46.7104 490.346 46.6813 490.333 46.6493C490.319 46.6172 490.312 46.5829 490.312 46.5482C490.311 46.5125 490.316 46.4769 490.329 46.4435C490.342 46.41 490.361 46.3795 490.386 46.3537C490.411 46.3279 490.441 46.3074 490.474 46.2934C490.507 46.2794 490.542 46.2722 490.578 46.2722C491.494 46.1319 492.393 45.9028 493.264 45.5882L494.776 44.9522C495.227 44.7522 495.668 44.5279 496.094 44.2802C497.669 43.3399 499.095 42.1755 500.328 40.8242C501.601 39.4763 502.602 37.9001 503.28 36.1802C504.045 34.2729 504.415 32.2324 504.369 30.1802C504.369 23.8082 501.949 19.0562 497.292 15.7082C492.635 12.3602 486.296 10.7402 478.24 10.7402H461.679C461.104 10.7434 460.553 10.9723 460.148 11.3771C459.742 11.7818 459.514 12.3294 459.514 12.9002H459.188V85.1522C459.187 85.723 459.415 86.2706 459.821 86.6753C460.227 87.08 460.777 87.309 461.353 87.3122H482.268C485.798 87.3537 489.316 86.8807 492.707 85.9082C495.762 85.074 498.634 83.6822 501.175 81.8042C503.6 80.0774 505.551 77.7753 506.848 75.1082C508.285 72.1858 508.991 68.9627 508.905 65.7122C508.934 63.4562 508.574 61.2118 507.84 59.0762ZM471.49 23.5442C471.493 22.9723 471.723 22.4247 472.131 22.0203C472.539 21.6159 473.091 21.3874 473.667 21.3842H477.792C481.17 21.2295 484.515 22.0957 487.385 23.8682C489.804 25.4882 491.014 28.0802 491.014 31.5362C491.085 32.9977 490.84 34.4572 490.295 35.817C489.751 37.1768 488.919 38.4054 487.857 39.4202C485.776 41.3642 482.631 42.3362 478.494 42.3362H473.655C473.079 42.333 472.527 42.1045 472.119 41.7001C471.711 41.2957 471.481 40.7481 471.478 40.1762L471.49 23.5442ZM492.272 73.6562C489.998 75.8162 486.623 76.8962 482.05 76.8962H473.776C473.2 76.8931 472.648 76.6645 472.24 76.2601C471.832 75.8557 471.602 75.3081 471.599 74.7362V54.9722C471.602 54.4003 471.832 53.8527 472.24 53.4483C472.648 53.0439 473.2 52.8154 473.776 52.8122H480.962C485.74 52.8122 489.345 53.8922 491.849 56.0522C493.091 57.1396 494.069 58.4909 494.712 60.0055C495.355 61.52 495.646 63.1589 495.562 64.8002C495.646 66.4203 495.397 68.0404 494.832 69.5626C494.266 71.0847 493.395 72.4773 492.272 73.6562Z" />
            <path d="M421.034 32.8082C424.332 32.7493 427.613 33.2944 430.712 34.4162C433.279 35.3873 435.666 36.7741 437.776 38.5202C439.621 40.0616 441.166 41.9242 442.336 44.0162C443.151 45.4169 443.808 46.9018 444.296 48.4442C444.341 48.6097 444.346 48.7831 444.312 48.951C444.279 49.1189 444.206 49.2769 444.101 49.4126C443.996 49.5484 443.86 49.6583 443.705 49.7338C443.55 49.8093 443.38 49.8485 443.207 49.8482H433.639C433.235 49.8369 432.841 49.7199 432.497 49.5093C432.153 49.2986 431.871 49.0016 431.679 48.6482C430.553 46.6689 428.872 45.0558 426.841 44.0042C424.201 42.8101 421.264 42.419 418.4 42.8804C415.537 43.3417 412.875 44.6348 410.752 46.5963C409.014 48.3397 407.647 50.4119 406.733 52.6899C405.819 54.9678 405.375 57.4049 405.43 59.8562C405.399 62.8529 406.13 65.8089 407.555 68.4514C408.98 71.0939 411.053 73.3379 413.583 74.9762C415.881 76.3393 418.514 77.0454 421.191 77.0162C424.554 77.0162 427.167 76.2722 429.018 74.6162C430.419 73.4287 431.595 72.0023 432.49 70.4042C432.672 70.076 432.94 69.8025 433.266 69.6125C433.592 69.4225 433.963 69.3229 434.341 69.3242H443.824C444.005 69.3241 444.182 69.369 444.341 69.4547C444.499 69.5404 444.633 69.6642 444.731 69.8147C444.828 69.9652 444.886 70.1377 444.899 70.3162C444.912 70.4947 444.879 70.6735 444.804 70.8363C444.126 72.6691 443.288 74.4398 442.3 76.1283C440.99 78.2654 439.358 80.1916 437.461 81.8402C435.36 83.5677 432.969 84.9161 430.397 85.8242C427.356 86.8671 424.155 87.3787 420.937 87.3363C417.218 87.3704 413.525 86.7109 410.05 85.3922C406.766 84.1918 403.794 82.277 401.353 79.7882C398.846 77.3435 396.885 74.4042 395.595 71.1602C394.158 67.5944 393.455 63.7796 393.526 59.9402C393.503 56.3643 394.168 52.8167 395.486 49.4882C396.729 46.2968 398.572 43.3689 400.917 40.8602C403.32 38.3211 406.251 36.3311 409.506 35.0282C413.136 33.4517 417.073 32.6935 421.034 32.8082Z" />
            <path d="M375.951 10.7998H374.657C371.303 10.7998 368.584 13.4968 368.584 16.8238V16.8598C368.584 20.1868 371.303 22.8838 374.657 22.8838H375.951C379.305 22.8838 382.023 20.1868 382.023 16.8598V16.8238C382.023 13.4968 379.305 10.7998 375.951 10.7998Z" />
            <path d="M379.022 32.7959H371.51C370.308 32.7959 369.333 33.763 369.333 34.9559V85.2119C369.333 86.4048 370.308 87.3719 371.51 87.3719H379.022C380.225 87.3719 381.2 86.4048 381.2 85.2119V34.9559C381.2 33.763 380.225 32.7959 379.022 32.7959Z" />
            <path d="M546.465 32.8084C550.448 32.6995 554.402 33.5216 558.005 35.2084C561.097 36.6822 563.845 38.7787 566.074 41.3644C568.177 43.8803 569.767 46.7782 570.755 49.8965C571.796 52.9906 572.311 56.2348 572.279 59.4964V60.9004C572.276 61.4723 572.046 62.0199 571.638 62.4243C571.23 62.8287 570.678 63.0573 570.102 63.0604H534.804C534.481 63.0666 534.164 63.1414 533.873 63.2799C533.582 63.4184 533.325 63.6173 533.118 63.8631C532.912 64.109 532.761 64.396 532.676 64.7047C532.591 65.0134 532.574 65.3366 532.626 65.6524C532.837 66.7287 533.166 67.7788 533.606 68.7844C534.434 70.5711 535.577 72.1967 536.981 73.5844C538.409 74.9427 540.068 76.0396 541.88 76.8244C543.729 77.6556 545.742 78.0657 547.772 78.0244C550.112 78.0734 552.429 77.5543 554.521 76.5124C556.116 75.641 557.522 74.4667 558.659 73.0564C558.866 72.7934 559.13 72.5795 559.432 72.4301C559.733 72.2807 560.064 72.1995 560.4 72.1924H569.993C570.185 72.1931 570.373 72.2428 570.539 72.3367C570.706 72.4306 570.845 72.5655 570.943 72.7284C571.042 72.8913 571.096 73.0767 571.102 73.2666C571.107 73.4565 571.062 73.6445 570.973 73.8124C570.219 75.2271 569.383 76.5974 568.469 77.9164C567.075 79.7982 565.379 81.44 563.449 82.7764C561.348 84.2321 559.035 85.3611 556.59 86.1244C553.777 87.0245 550.835 87.4623 547.88 87.4204C544.11 87.4716 540.367 86.7739 536.872 85.3684C533.622 84.0403 530.663 82.0961 528.163 79.6444C525.704 77.127 523.776 74.1491 522.489 70.8844C521.115 67.2968 520.414 63.4902 520.421 59.6524C520.38 56.1528 520.97 52.6741 522.163 49.3804C523.329 46.2476 525.068 43.3552 527.292 40.8484C529.577 38.3649 532.358 36.379 535.457 35.0164C538.918 33.4872 542.677 32.7333 546.465 32.8084ZM546.465 41.7724C544.553 41.7216 542.653 42.0904 540.901 42.8524C539.329 43.5323 537.892 44.4831 536.655 45.6604C535.461 46.7995 534.5 48.1563 533.824 49.6565C533.503 50.3183 533.248 51.0095 533.062 51.7204C532.964 52.0372 532.943 52.3725 533.002 52.6988C533.06 53.025 533.196 53.3328 533.398 53.5966C533.6 53.8604 533.863 54.0727 534.164 54.216C534.465 54.3593 534.797 54.4293 535.131 54.4204H557.679C558.01 54.4216 558.337 54.3465 558.634 54.2009C558.931 54.0554 559.191 53.8434 559.391 53.5816C559.592 53.3199 559.728 53.0156 559.79 52.6926C559.852 52.3697 559.837 52.0368 559.747 51.7204C559.058 49.3874 557.785 47.2655 556.046 45.5524C554.809 44.375 553.371 43.4244 551.8 42.7444C550.102 42.0811 548.29 41.751 546.465 41.7724Z" />
            <path d="M275.548 34.9563V39.8523C275.551 39.9622 275.519 40.0703 275.457 40.1613C275.395 40.2524 275.305 40.3219 275.201 40.3603C275.097 40.3986 274.984 40.4037 274.877 40.3751C274.77 40.3464 274.675 40.2853 274.604 40.2003C274.048 39.5763 273.395 39.0003 272.814 38.3043C271.729 37.2299 270.51 36.2982 269.185 35.5323C267.707 34.6863 266.131 34.0214 264.492 33.5523C262.598 33.0297 260.639 32.7791 258.673 32.8083C255.273 32.7821 251.905 33.4521 248.778 34.7763C245.715 36.0533 242.937 37.9168 240.601 40.2603C238.2 42.7147 236.316 45.6193 235.06 48.8043C233.661 52.3424 232.967 56.116 233.016 59.9163C232.92 64.0232 233.669 68.1064 235.218 71.9163C236.549 75.1281 238.505 78.0478 240.976 80.5083C243.245 82.7615 245.959 84.5262 248.947 85.6923C251.753 86.8045 254.745 87.3826 257.766 87.3963C261.501 87.5339 265.204 86.6673 268.484 84.8883C270.737 83.5805 272.793 81.9647 274.592 80.0883C274.665 80.0062 274.762 79.9485 274.869 79.9232C274.976 79.8979 275.089 79.9063 275.191 79.9471C275.293 79.988 275.38 80.0592 275.44 80.1512C275.499 80.2431 275.529 80.3511 275.524 80.4603V85.1883C275.524 85.4719 275.58 85.7528 275.69 86.0149C275.799 86.277 275.959 86.5151 276.162 86.7156C276.364 86.9162 276.604 87.0753 276.868 87.1839C277.132 87.2924 277.415 87.3483 277.701 87.3483H285.358C285.936 87.3483 286.49 87.1207 286.898 86.7156C287.306 86.3106 287.536 85.7611 287.536 85.1883V34.9323C287.533 34.3615 287.302 33.8151 286.894 33.4127C286.486 33.0102 285.934 32.7843 285.358 32.7843H277.75C277.461 32.7811 277.174 32.835 276.906 32.9429C276.638 33.0508 276.395 33.2104 276.19 33.4126C275.985 33.6148 275.823 33.8554 275.713 34.1204C275.602 34.3854 275.546 34.6696 275.548 34.9563ZM275.548 65.5563C275.401 66.0587 275.224 66.5516 275.016 67.0323C274.221 68.9684 273.073 70.7421 271.629 72.2643C270.256 73.7038 268.612 74.8617 266.79 75.6723C264.586 76.5372 262.227 76.9455 259.859 76.8723C257.851 76.791 255.88 76.3094 254.064 75.4563C252.183 74.5448 250.53 73.2289 249.226 71.6043C247.921 69.991 246.947 68.1403 246.359 66.1563C245.754 64.1307 245.448 62.0288 245.451 59.9163C245.455 57.8342 245.785 55.7653 246.431 53.7843C247.045 51.8033 248.03 49.955 249.334 48.3363C250.639 46.7116 252.292 45.3958 254.173 44.4843C256.346 43.4835 258.722 42.9909 261.117 43.0443C263.156 43.0222 265.177 43.4313 267.044 44.2443C268.886 45.0424 270.536 46.2205 271.883 47.7003C273.305 49.2914 274.402 51.1418 275.113 53.1483C275.277 53.5764 275.419 54.0131 275.536 54.4563C276.057 56.3281 276.313 58.2625 276.298 60.2043C276.322 62.0156 276.069 63.8201 275.548 65.5563Z" />
            <path d="M342.116 34.9563V39.8403C342.117 39.9509 342.084 40.0592 342.022 40.1506C341.959 40.242 341.869 40.3121 341.765 40.3514C341.661 40.3906 341.547 40.3972 341.439 40.3702C341.331 40.3432 341.234 40.2839 341.161 40.2003C340.616 39.5763 340.023 38.9403 339.37 38.3043C338.291 37.2235 337.07 36.2912 335.741 35.5323C334.268 34.6824 332.696 34.0135 331.06 33.5403C329.165 33.0244 327.206 32.7739 325.241 32.7963C321.837 32.7754 318.465 33.4493 315.334 34.7763C312.289 36.0581 309.53 37.9262 307.217 40.2723C304.814 42.7247 302.93 45.6298 301.677 48.8163C300.271 52.3524 299.577 56.1274 299.633 59.9283C299.534 64.0353 300.283 68.119 301.834 71.9283C303.167 75.1424 305.124 78.0657 307.592 80.5322C309.86 82.7825 312.569 84.5469 315.552 85.7163C318.364 86.8218 321.358 87.3996 324.382 87.4202C328.114 87.5599 331.814 86.6931 335.088 84.9122C337.348 83.6085 339.409 81.9923 341.209 80.1122C341.285 80.0358 341.382 79.9837 341.489 79.9625C341.595 79.9413 341.705 79.952 341.805 79.9933C341.905 80.0345 341.99 80.1044 342.05 80.194C342.11 80.2836 342.141 80.3888 342.14 80.4963V88.1402C342.152 88.3681 342.152 88.5964 342.14 88.8243C341.926 92.7281 340.206 96.4007 337.338 99.0814C334.469 101.762 330.67 103.245 326.729 103.224C322.658 103.294 318.668 102.094 315.322 99.7922C314.376 99.1263 313.615 98.2349 313.108 97.2003C312.95 96.7906 312.672 96.4371 312.31 96.1849C311.948 95.9327 311.518 95.7932 311.076 95.7842H301.931C301.778 95.7852 301.626 95.8178 301.487 95.88C301.347 95.9423 301.222 96.0328 301.119 96.1457C301.017 96.2587 300.939 96.3916 300.892 96.536C300.844 96.6803 300.827 96.833 300.842 96.9842C301.016 99.203 301.677 101.357 302.778 103.296C303.044 103.764 303.322 104.232 303.637 104.676C308.233 111.276 317.705 115.104 326.681 115.104C333.685 115.121 340.428 112.47 345.52 107.698C350.611 102.926 353.662 96.3982 354.043 89.4603C354.043 89.0283 354.043 88.5963 354.043 88.1643V34.9922C354.043 34.4214 353.816 33.8739 353.41 33.4692C353.004 33.0644 352.454 32.8354 351.878 32.8323H344.269C343.702 32.8384 343.16 33.0638 342.758 33.4605C342.356 33.8571 342.126 34.3938 342.116 34.9563ZM341.584 67.0323C340.785 68.969 339.633 70.7428 338.185 72.2643C336.809 73.7027 335.166 74.864 333.346 75.6842C331.535 76.488 329.572 76.8972 327.588 76.8842C325.193 76.939 322.817 76.4463 320.645 75.4443C318.742 74.5389 317.068 73.2227 315.745 71.5922C314.439 69.9818 313.469 68.1299 312.891 66.1443C312.286 64.1187 311.98 62.0168 311.983 59.9042C311.982 57.8188 312.309 55.746 312.951 53.7603C313.565 51.7793 314.55 49.931 315.854 48.3123C317.181 46.6887 318.854 45.3772 320.753 44.4723C322.926 43.4703 325.302 42.9775 327.697 43.0323C329.736 43.0167 331.755 43.4255 333.624 44.2323C335.464 45.0389 337.113 46.2205 338.463 47.7003C339.885 49.2914 340.982 51.1417 341.693 53.1482C341.85 53.5802 341.995 54.0123 342.116 54.4563C342.624 56.2735 342.88 58.1506 342.878 60.0363V60.2043C342.893 62.0001 342.637 63.7881 342.116 65.5083C341.966 66.0251 341.788 66.5338 341.584 67.0323Z" />
          </g>
          <defs>
            <clipPath id="clip0_1815_54052">
              <rect width="624" height="121" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <a
        className="flex items-center justify-center gap-2"
        href={`https://twitter.com/intent/user?screen_name=${magicBellHandle}`}
        target="_blank"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.14358 4.69633C8.14358 2.96887 9.54357 1.5686 11.2702 1.5686C12.2838 1.5686 13.0932 2.04807 13.6356 2.74388C14.2182 2.6247 14.7659 2.40916 15.2615 2.11511C15.0661 2.72601 14.6526 3.23963 14.1136 3.56466C14.114 3.56571 14.1144 3.56677 14.1149 3.56782C14.6436 3.50364 15.1466 3.36305 15.615 3.15549L15.6139 3.15718C15.2769 3.66186 14.8533 4.10739 14.3664 4.47037C14.3925 4.64675 14.4058 4.8243 14.4058 5.00083C14.4058 8.68713 11.5975 12.9746 6.43144 12.9746C4.84928 12.9746 3.37566 12.5111 2.13527 11.7152C1.90285 11.5661 1.83532 11.2568 1.98445 11.0244C1.99762 11.0038 2.01204 10.9846 2.02756 10.9667C2.11604 10.8202 2.2846 10.731 2.46561 10.7523C3.38088 10.8601 4.2959 10.7486 5.10241 10.3963C4.30248 10.0434 3.68151 9.35978 3.41225 8.51977C3.36381 8.36863 3.39857 8.20314 3.50373 8.08425C3.50737 8.08014 3.51108 8.07609 3.51486 8.07213C2.87413 7.50822 2.46995 6.68211 2.46995 5.76146V5.72762C2.46995 5.56817 2.55433 5.42062 2.69177 5.33977C2.73692 5.3132 2.78559 5.29514 2.83553 5.28561C2.61571 4.86158 2.49138 4.37988 2.49138 3.86961C2.49138 3.40168 2.49405 2.81195 2.82354 2.28084C2.8974 2.16178 3.01779 2.08918 3.14662 2.07198C3.3361 2.0124 3.55109 2.06972 3.68427 2.23305C4.77558 3.57129 6.35087 4.49586 8.14387 4.73964L8.14358 4.69633ZM6.43144 11.9746C5.64408 11.9746 4.88803 11.8436 4.18269 11.6024C5.04034 11.4538 5.86329 11.116 6.5724 10.5602C6.72233 10.4427 6.78203 10.2436 6.72148 10.063C6.66092 9.88237 6.49322 9.75946 6.30277 9.7561C5.5999 9.74369 4.97734 9.39719 4.58815 8.86848C4.7785 8.85309 4.9645 8.82042 5.14467 8.7717C5.34625 8.71719 5.48384 8.53117 5.47696 8.32246C5.47007 8.11375 5.32051 7.93721 5.11577 7.89611C4.33716 7.7398 3.70904 7.16767 3.47191 6.42178C3.67276 6.47028 3.88124 6.49914 4.09504 6.50613C4.29585 6.5127 4.47668 6.38536 4.53817 6.19408C4.59965 6.0028 4.52688 5.79394 4.35985 5.68227C3.77545 5.29158 3.39138 4.62467 3.39138 3.86961C3.39138 3.70216 3.39374 3.55272 3.40377 3.41722C4.76137 4.79916 6.61895 5.68934 8.6861 5.79342C8.84247 5.80129 8.99349 5.73546 9.09417 5.61556C9.19484 5.49565 9.23354 5.33551 9.19873 5.18287C9.16277 5.0252 9.14358 4.86287 9.14358 4.69633C9.14358 3.52088 10.0961 2.5686 11.2702 2.5686C12.5045 2.5686 13.4058 3.71212 13.4058 5.00083C13.4058 8.25712 10.9304 11.9746 6.43144 11.9746Z"
            fill="#BCAFFD"
          />
        </svg>
        <span className="text-hover text-sm">Follow us</span>
      </a>
    </footer>
  )
}
