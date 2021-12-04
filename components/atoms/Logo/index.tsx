import classnames from 'classnames'
import { ActionItem } from 'components/atoms'
import styles from './index.module.scss'

type Props = {
  flag?: boolean
  className?: string
}

const Logo: React.FC<Props> = ({ className, flag = false }) => {
  return (
    <ActionItem href="/" className="py__1 relative">
      <>
        <svg
          style={{ maxWidth: '7.5rem', width: '100%' }}
          className=""
          viewBox="0 0 96 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M30.1692 15.0208C30.3249 15.0324 31.0252 15.0033 32.2704 14.9336C33.5275 14.8639 34.3716 14.8 34.8025 14.7418C35.114 14.7186 35.2695 14.5326 35.2695 14.1838C35.2695 13.2538 35.0899 12.4402 34.7308 11.7427C34.3716 11.0451 33.8208 10.6964 33.0785 10.6964C32.5876 10.6964 32.1387 10.865 31.7316 11.2021C31.3365 11.5276 31.0312 11.9345 30.8157 12.4227C30.6001 12.9109 30.4386 13.3818 30.3309 13.8351C30.2231 14.2884 30.1692 14.6838 30.1692 15.0208ZM30.1333 16.4157C30.1333 17.3457 30.259 18.1711 30.5105 18.8919C30.7618 19.6126 31.0671 20.1764 31.4263 20.5832C31.7975 20.99 32.2224 21.3272 32.7013 21.5946C33.1802 21.8504 33.6173 22.0248 34.0124 22.1178C34.4075 22.199 34.7906 22.2397 35.1618 22.2397C36.7542 22.2397 38.0952 21.6585 39.1846 20.496C39.3043 20.531 39.4061 20.618 39.4899 20.7576C39.5738 20.8854 39.6158 21.0076 39.6158 21.1238C39.6158 21.4609 39.5798 21.6818 39.5079 21.7864C39.3163 22.0769 39.041 22.3967 38.6818 22.7454C38.3226 23.0825 37.8676 23.4429 37.317 23.8265C36.7662 24.2101 36.1077 24.5297 35.3414 24.7855C34.5871 25.0413 33.8089 25.1691 33.0068 25.1691C31.6537 25.1691 30.4085 24.8843 29.2712 24.3147C28.1338 23.7451 27.2119 22.9023 26.5055 21.7864C25.811 20.6588 25.4639 19.3569 25.4639 17.8805C25.4639 16.4391 25.835 15.0558 26.5772 13.7305C27.3315 12.3936 28.3254 11.3184 29.5586 10.5046C30.8038 9.6793 32.0967 9.2666 33.4377 9.2666C34.3356 9.2666 35.1498 9.38864 35.8802 9.63277C36.6224 9.86524 37.2212 10.1675 37.676 10.5395C38.143 10.9115 38.5321 11.3358 38.8435 11.8124C39.1667 12.289 39.3941 12.754 39.5259 13.2074C39.6576 13.6607 39.7235 14.1025 39.7235 14.5326C39.7235 14.9162 39.6277 15.2534 39.4362 15.544C39.2446 15.8346 39.017 15.9857 38.7537 15.9973C36.5985 16.1833 33.7251 16.3227 30.1333 16.4157Z"
              fill="#2C5282"
            />
            <path
              d="M53.3458 9.2666C54.1726 9.2666 54.8778 9.3844 55.4613 9.61999C56.0449 9.8438 56.5191 10.1677 56.8837 10.5918C57.2606 11.0041 57.5524 11.5636 57.7591 12.2704C57.9659 12.9772 58.1056 13.7487 58.1786 14.585C58.2637 15.4097 58.3062 16.4168 58.3062 17.6065V19.9036C58.3062 21.6469 58.4035 22.7542 58.598 23.2254C58.7195 23.5434 59.4976 23.7554 60.9323 23.8616C61.0174 23.9911 61.0539 24.2148 61.0417 24.5329C61.0417 24.8509 61.0053 25.063 60.9323 25.1691C59.2667 25.0041 57.6011 24.9217 55.9355 24.9217C54.5617 24.9217 53.0419 25.0041 51.3763 25.1691C51.3033 25.063 51.2608 24.8509 51.2486 24.5329C51.2486 24.2148 51.2912 23.9911 51.3763 23.8616C52.5069 23.779 53.1392 23.5669 53.2729 23.2254C53.4674 22.7542 53.5647 21.6469 53.5647 19.9036V17.1118C53.5647 13.79 52.7501 12.1291 51.1209 12.1291C50.428 12.1291 49.7168 12.3646 48.9873 12.8358C48.27 13.307 47.9113 13.731 47.9113 14.108V19.9036C47.9113 21.6469 48.0085 22.7542 48.2031 23.2254C48.3369 23.5552 49.0299 23.7673 50.2822 23.8616C50.3671 23.9911 50.4037 24.2148 50.3916 24.5329C50.3916 24.8509 50.355 25.063 50.2822 25.1691C48.6164 25.0041 47.0359 24.9217 45.5406 24.9217C43.875 24.9217 42.2094 25.0041 40.5436 25.1691C40.4708 25.063 40.4281 24.8509 40.416 24.5329C40.416 24.2148 40.4586 23.9911 40.5436 23.8616C41.9783 23.7554 42.7564 23.5434 42.8779 23.2254C43.0725 22.7542 43.1697 21.6469 43.1697 19.9036V15.8395C43.1697 14.3082 43.0603 13.3424 42.8415 12.9418C42.72 12.718 42.3734 12.5472 41.802 12.4294C41.2428 12.2999 40.8233 12.2351 40.5436 12.2351C40.483 12.1997 40.4525 12.0113 40.4525 11.6696C40.4525 11.3163 40.4951 11.1396 40.5802 11.1396C41.8446 11.0453 43.1393 10.8097 44.4646 10.4328C45.8019 10.0558 46.8779 9.66711 47.6925 9.2666C47.8019 9.2666 47.9295 9.34317 48.0755 9.4963C48.2334 9.64944 48.3125 9.77313 48.3125 9.86736C48.2882 9.94982 48.2457 10.156 48.1849 10.4858C48.124 10.8156 48.0694 11.1278 48.0207 11.4223C47.9721 11.7168 47.9479 11.8699 47.9479 11.8817C47.9479 11.9995 47.96 12.0702 47.9843 12.0937C48.0328 12.0937 48.1179 12.0348 48.2396 11.917C48.8109 11.2927 49.6074 10.6978 50.6285 10.1324C51.662 9.5552 52.5678 9.2666 53.3458 9.2666Z"
              fill="#2C5282"
            />
            <path
              d="M69.8235 10.4463C70.4021 10.4463 70.8837 10.4678 71.2695 10.5108C71.3897 10.5108 71.4504 10.2631 71.4504 9.7676C71.4504 9.7676 71.4504 8.78738 71.4504 6.8269C71.4504 6.15903 71.3659 5.64199 71.1974 5.27575C71.1129 5.1034 70.8117 4.96336 70.2932 4.85565C69.7752 4.74792 69.3532 4.69406 69.0281 4.69406C68.9799 4.69406 68.9436 4.61866 68.9198 4.46786C68.8954 4.30627 68.8894 4.1447 68.9013 3.98313C68.9257 3.81078 68.968 3.70305 69.0281 3.65996C69.7871 3.59533 70.5402 3.50915 71.2873 3.40144C72.0344 3.29373 72.6732 3.186 73.2036 3.07828C73.7459 2.9598 74.2281 2.85207 74.6496 2.75513C75.0717 2.64741 75.3967 2.56124 75.6259 2.4966C75.867 2.43197 75.9932 2.39966 76.0057 2.39966C76.1015 2.41043 76.2105 2.48583 76.3307 2.62587C76.4516 2.75513 76.5236 2.86285 76.548 2.94903C76.2825 3.91849 76.1504 5.00644 76.1504 6.21289V21.369C76.1504 21.9721 76.2587 22.3814 76.4754 22.5969C76.6921 22.8123 77.2344 22.9201 78.1024 22.9201C78.1744 22.9846 78.2107 23.1247 78.2107 23.3401C78.2107 23.5556 78.1381 23.7602 77.994 23.9542C77.3791 24.008 76.5837 24.1319 75.608 24.3258C74.6317 24.5089 73.7763 24.6813 73.0411 24.8428C72.3178 25.0045 71.8963 25.0853 71.7755 25.0853C71.6909 25.0853 71.6129 25.0098 71.5409 24.859C71.4802 24.7189 71.4504 24.5358 71.4504 24.3097V23.7926C71.4504 23.6418 71.4141 23.5879 71.3421 23.631C69.727 24.622 68.2447 25.1175 66.8952 25.1175C65.1354 25.1175 63.6053 24.4657 62.3037 23.1624C61.0023 21.859 60.3516 20.2702 60.3516 18.3959C60.3516 17.351 60.5744 16.3762 61.0204 15.4713C61.4662 14.5665 62.0386 13.8178 62.7377 13.2254C63.4366 12.6221 64.2138 12.1051 65.0694 11.6742C65.9248 11.2433 66.7564 10.931 67.5637 10.7371C68.3834 10.5432 69.1365 10.4463 69.8235 10.4463ZM68.6305 12.0943C67.8953 12.0943 67.2809 12.3313 66.7868 12.8052C66.3046 13.2792 65.9671 13.8717 65.7742 14.5826C65.5813 15.2828 65.4849 16.0907 65.4849 17.0063C65.4849 18.8052 65.8165 20.2648 66.479 21.3851C67.1422 22.4946 68.028 23.0493 69.1365 23.0493C69.6187 23.0493 70.1247 22.9092 70.6551 22.6292C71.1849 22.3384 71.4504 22.0799 71.4504 21.8536V13.5485C71.4504 13.2361 71.1611 12.9183 70.5825 12.5952C70.0044 12.2613 69.3532 12.0943 68.6305 12.0943Z"
              fill="#2C5282"
            />
            <path
              d="M82.2027 9.52256C83.7471 9.52256 85.1883 9.44235 86.5269 9.28198C86.6179 9.37361 86.6637 9.58559 86.6637 9.91779C86.6637 10.2386 86.6179 10.4505 86.5269 10.5537C86.2179 10.5537 85.8005 10.6453 85.2741 10.8286C84.7593 11.0119 84.5019 11.2295 84.5019 11.4816C84.5019 11.7107 84.5251 11.8825 84.5709 11.9971L88.1049 18.7677C89.1571 16.4536 90.0609 14.4487 90.8157 12.7533C91.0673 12.2492 91.1937 11.8253 91.1937 11.4816C91.1937 11.2869 91.0847 11.1207 90.8673 10.9833C90.6499 10.8457 90.3815 10.7484 90.0609 10.6911C89.7409 10.6338 89.4777 10.5994 89.2719 10.588C89.0661 10.5651 88.8945 10.5537 88.7571 10.5537C88.6771 10.4734 88.6313 10.2729 88.6197 9.95216C88.6197 9.61995 88.6539 9.39656 88.7229 9.28198C89.9241 9.44235 91.1247 9.52256 92.326 9.52256C93.504 9.52256 94.6936 9.44235 95.8948 9.28198C95.9632 9.37361 95.9974 9.57982 95.9974 9.90061C96.009 10.2099 95.9748 10.4276 95.8948 10.5537C95.6658 10.5537 95.391 10.5766 95.071 10.6223C94.7626 10.6568 94.3962 10.7713 93.973 10.9661C93.5498 11.1493 93.264 11.39 93.115 11.6878C90.7815 16.6483 88.8945 20.6352 87.4533 23.6482C87.3275 23.9232 87.0985 24.4157 86.7669 25.126C86.4353 25.8362 86.1947 26.3289 86.0463 26.6039C85.9089 26.8903 85.6915 27.2741 85.3941 27.7552C85.0967 28.2479 84.7767 28.7062 84.4335 29.1299C82.9007 31.0432 81.4479 31.9998 80.075 31.9998C79.3892 31.9998 78.8344 31.8165 78.4112 31.4499C77.988 31.0948 77.7764 30.6708 77.7764 30.1783C77.7764 29.468 78.0396 28.9295 78.5654 28.5629C80.0408 28.5629 81.1847 28.391 81.9969 28.0474C82.8207 27.7037 83.5639 26.9819 84.2277 25.8821C84.5709 25.2979 84.9709 24.4845 85.4283 23.4419L79.7324 11.8596C79.5376 11.4129 79.1944 11.0864 78.7028 10.8802C78.2222 10.6625 77.8448 10.5537 77.5706 10.5537C77.479 10.4047 77.439 10.187 77.45 9.90061C77.45 9.60277 77.49 9.39656 77.5706 9.28198C78.9544 9.44235 80.4988 9.52256 82.2027 9.52256Z"
              fill="#2C5282"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.58203 22.9566C6.86799 20.6178 15.7611 19.4784 22.2089 19.4784L28.6566 5.34473L22.7103 6.38594L20.0596 15.3045C14.3283 15.3045 5.73128 19.9811 3.58203 22.9566Z"
              fill="#E36B1F"
            />
            <path
              d="M0 26.0905C0 10.9061 21.9433 1.44849 23.1402 1.44849L18.2687 13.5652C11.0872 15.0836 2.47163 20.5373 0 26.0905Z"
              fill="#2C5282"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 27.826H20.7148C20.7148 27.826 20.5358 25.6445 20.7761 24.3478C21.0165 23.0511 21.4925 22.2609 21.4925 22.2609C20.4179 21.5652 20.0597 21.5652 20.0597 21.5652C20.0597 21.5652 18.6269 22.9565 16.4776 23.6521C14.3284 24.3478 10.9745 24.7041 8.59702 24.7041H2.39017C1.59345 25.4845 0.796723 26.2651 0 27.826Z"
              fill="#2C5282"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 -4.602e-05L0.777739 -4.60389e-05C0.777739 -4.60389e-05 0.956756 2.18145 0.716418 3.47813C0.47608 4.77481 -3.03556e-09 5.56499 -3.03556e-09 5.56499C1.07463 6.26076 1.43284 6.26074 1.43284 6.26074C1.43284 6.26074 2.86567 4.86945 5.01493 4.17379C7.16418 3.47813 10.518 3.12187 12.8955 3.12187L15.7612 3.12187C17.5522 2.08683 22.5672 0.347699 24 -4.602e-05Z"
              fill="#2C5282"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="96" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {flag && (
          <img
            className={styles.countryFlag}
            alt="United Arab Emirates"
            role="presentation"
            src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/AE.svg"
          />
        )}
      </>
    </ActionItem>
  )
}

export default Logo
