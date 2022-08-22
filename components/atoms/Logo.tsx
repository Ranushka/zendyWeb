import React from 'react'
import { ActionLink } from 'components/atoms'
import useGetCountry from 'fetchHooks/useGetCountry'

type Props = {
  dataName?: string
  flag?: boolean
  className?: string
}

const Logo: React.FC<Props> = ({
  className,
  flag = false,
  dataName = 'logoHead'
}) => {
  const { data } = useGetCountry()

  return (
    <ActionLink
      dataName={dataName}
      href="/"
      className={`relative ${className}`}
    >
      <div>
        <svg
          style={{ width: '7rem', verticalAlign: 'middle' }}
          className=""
          viewBox="0 0 96 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.1216 13.6456C25.2893 13.658 26.0437 13.627 27.385 13.5522C28.739 13.4775 29.6483 13.409 30.1125 13.3466C30.448 13.3218 30.6156 13.1225 30.6156 12.7489C30.6156 11.7524 30.4221 10.8806 30.0353 10.1333C29.6483 9.38587 29.055 9.01221 28.2554 9.01221C27.7267 9.01221 27.2431 9.19279 26.8046 9.55403C26.379 9.90277 26.0501 10.3388 25.8181 10.8619C25.5858 11.385 25.4118 11.8895 25.2958 12.3752C25.1797 12.861 25.1216 13.2845 25.1216 13.6456ZM25.083 15.1403C25.083 16.1367 25.2183 17.0211 25.4892 17.7934C25.7599 18.5656 26.0888 19.1697 26.4757 19.6056C26.8755 20.0415 27.3333 20.4027 27.8492 20.6892C28.365 20.9633 28.8358 21.1501 29.2614 21.2498C29.687 21.3368 30.0997 21.3805 30.4994 21.3805C32.2148 21.3805 33.6592 20.7577 34.8328 19.5121C34.9617 19.5496 35.0713 19.6429 35.1616 19.7924C35.2519 19.9294 35.2972 20.0602 35.2972 20.1847C35.2972 20.546 35.2584 20.7826 35.1809 20.8947C34.9746 21.2061 34.6781 21.5486 34.2911 21.9222C33.9042 22.2835 33.4141 22.6696 32.821 23.0807C32.2277 23.4917 31.5184 23.8341 30.6929 24.1082C29.8805 24.3823 29.0422 24.5192 28.1782 24.5192C26.7207 24.5192 25.3794 24.2141 24.1544 23.6038C22.9292 22.9934 21.9361 22.0905 21.1752 20.8947C20.427 19.6866 20.0532 18.2915 20.0532 16.7096C20.0532 15.1653 20.453 13.6831 21.2525 12.2631C22.0649 10.8307 23.1355 9.67861 24.4639 8.80671C25.8052 7.92239 27.1979 7.48022 28.6424 7.48022C29.6095 7.48022 30.4866 7.61098 31.2734 7.87256C32.0728 8.12164 32.7178 8.44554 33.2078 8.84412C33.7107 9.2427 34.1299 9.69727 34.4653 10.2079C34.8135 10.7187 35.0584 11.2168 35.2004 11.7026C35.3422 12.1883 35.4132 12.6617 35.4132 13.1225C35.4132 13.5335 35.31 13.8949 35.1037 14.2062C34.8973 14.5176 34.6522 14.6795 34.3686 14.6919C32.0471 14.8913 28.9519 15.0406 25.083 15.1403Z"
            className="logo_sec"
          />
          <path
            d="M50.1734 7.48022C51.0627 7.48022 51.8212 7.60644 52.4487 7.85887C53.0764 8.09866 53.5865 8.44577 53.9786 8.90012C54.384 9.34191 54.6979 9.94137 54.9201 10.6987C55.1425 11.4559 55.2929 12.2827 55.3714 13.1788C55.4629 14.0623 55.5086 15.1415 55.5086 16.4162V18.8774C55.5086 20.7453 55.6132 21.9317 55.8224 22.4366C55.9531 22.7773 56.79 23.0045 58.3331 23.1182C58.4247 23.257 58.4638 23.4967 58.4508 23.8375C58.4508 24.1783 58.4116 24.4055 58.3331 24.5192C56.5417 24.3424 54.7502 24.2541 52.9588 24.2541C51.4811 24.2541 49.8465 24.3424 48.0551 24.5192C47.9766 24.4055 47.9309 24.1783 47.9177 23.8375C47.9177 23.4967 47.9636 23.257 48.0551 23.1182C49.2711 23.0298 49.9511 22.8025 50.0949 22.4366C50.3042 21.9317 50.4088 20.7453 50.4088 18.8774V15.886C50.4088 12.3269 49.5327 10.5472 47.7804 10.5472C47.035 10.5472 46.2701 10.7997 45.4855 11.3045C44.7141 11.8094 44.3282 12.2637 44.3282 12.6676V18.8774C44.3282 20.7453 44.4329 21.9317 44.6421 22.4366C44.786 22.7899 45.5314 23.0172 46.8783 23.1182C46.9697 23.257 47.009 23.4967 46.9959 23.8375C46.9959 24.1783 46.9566 24.4055 46.8783 24.5192C45.0866 24.3424 43.3867 24.2541 41.7784 24.2541C39.987 24.2541 38.1955 24.3424 36.4038 24.5192C36.3256 24.4055 36.2797 24.1783 36.2666 23.8375C36.2666 23.4967 36.3125 23.257 36.4038 23.1182C37.947 23.0045 38.7838 22.7773 38.9146 22.4366C39.1238 21.9317 39.2284 20.7453 39.2284 18.8774V14.5229C39.2284 12.8822 39.1107 11.8472 38.8754 11.4181C38.7447 11.1783 38.372 10.9953 37.7573 10.8691C37.1559 10.7303 36.7047 10.6608 36.4038 10.6608C36.3386 10.6229 36.3058 10.421 36.3058 10.055C36.3058 9.67638 36.3517 9.48702 36.4433 9.48702C37.8032 9.38609 39.1958 9.13366 40.6211 8.72973C42.0594 8.32587 43.2168 7.90937 44.0929 7.48022C44.2106 7.48022 44.3478 7.56227 44.5048 7.72634C44.6747 7.89041 44.7598 8.02294 44.7598 8.12387C44.7336 8.21223 44.688 8.43312 44.6225 8.78655C44.557 9.13991 44.4983 9.47437 44.4459 9.78995C44.3937 10.1054 44.3676 10.2696 44.3676 10.2822C44.3676 10.4084 44.3806 10.4841 44.4068 10.5094C44.4589 10.5094 44.5505 10.4462 44.6814 10.32C45.2959 9.65109 46.1525 9.01369 47.2509 8.40791C48.3623 7.78941 49.3365 7.48022 50.1734 7.48022Z"
            className="logo_sec"
          />
          <path
            d="M67.783 8.68471C68.4051 8.68471 68.9229 8.70801 69.3376 8.75446C69.4669 8.75446 69.5321 8.48707 69.5321 7.95222C69.5321 7.95222 69.5321 6.8943 69.5321 4.77834C69.5321 4.05751 69.4413 3.49946 69.2602 3.10418C69.1692 2.91816 68.8454 2.76701 68.288 2.65076C67.7312 2.53449 67.2775 2.47636 66.928 2.47636C66.8762 2.47636 66.8371 2.39497 66.8115 2.23222C66.7852 2.05782 66.7789 1.88343 66.7917 1.70905C66.8179 1.52302 66.8633 1.40676 66.928 1.36026C67.744 1.29049 68.5536 1.19749 69.3568 1.08123C70.16 0.964974 70.8467 0.848707 71.417 0.732438C72 0.604563 72.5184 0.488293 72.9715 0.383661C73.4253 0.2674 73.7747 0.174391 74.0211 0.104634C74.2803 0.0348776 74.416 0 74.4295 0C74.5325 0.0116254 74.6496 0.0930084 74.7789 0.244147C74.9088 0.383661 74.9862 0.49993 75.0125 0.592939C74.727 1.63928 74.5849 2.81352 74.5849 4.11564V20.4736C74.5849 21.1246 74.7014 21.5664 74.9344 21.799C75.1674 22.0315 75.7504 22.1478 76.6835 22.1478C76.761 22.2174 76.8 22.3686 76.8 22.6011C76.8 22.8337 76.7219 23.0546 76.567 23.2639C75.9059 23.322 75.0509 23.4558 74.0019 23.665C72.9523 23.8626 72.0326 24.0486 71.2422 24.223C70.4646 24.3974 70.0115 24.4847 69.8816 24.4847C69.7907 24.4847 69.7069 24.4033 69.6294 24.2404C69.5642 24.0893 69.5321 23.8916 69.5321 23.6476V23.0895C69.5321 22.9267 69.4931 22.8686 69.4157 22.9151C67.6794 23.9846 66.0858 24.5195 64.6349 24.5195C62.743 24.5195 61.0981 23.816 59.6987 22.4093C58.2996 21.0025 57.6 19.2878 57.6 17.2648C57.6 16.1371 57.8396 15.085 58.3191 14.1083C58.7983 13.1317 59.4137 12.3237 60.1653 11.6842C60.9166 11.0332 61.7522 10.4751 62.672 10.0101C63.5917 9.54501 64.4858 9.20787 65.3536 8.99862C66.2349 8.78937 67.0445 8.68471 67.783 8.68471ZM66.5004 10.4635C65.7101 10.4635 65.0496 10.7193 64.5184 11.2308C64 11.7424 63.6371 12.3818 63.4297 13.1491C63.2224 13.9049 63.1187 14.7768 63.1187 15.765C63.1187 17.7066 63.4752 19.282 64.1875 20.4911C64.9005 21.6886 65.8528 22.2873 67.0445 22.2873C67.5629 22.2873 68.1069 22.1361 68.6771 21.8339C69.2467 21.52 69.5321 21.2409 69.5321 20.9967V12.0331C69.5321 11.6959 69.2211 11.3529 68.599 11.0041C67.9776 10.6437 67.2775 10.4635 66.5004 10.4635Z"
            className="logo_sec"
          />
          <path
            d="M81.0864 7.73985C82.7554 7.73985 84.3131 7.65332 85.7604 7.48022C85.8585 7.57915 85.9087 7.80787 85.9087 8.16644C85.9087 8.51264 85.8585 8.74137 85.7604 8.85277C85.4266 8.85277 84.9753 8.95167 84.4058 9.14946C83.8495 9.34732 83.5713 9.58226 83.5713 9.8543C83.5713 10.1015 83.5968 10.287 83.6463 10.4106L87.4665 17.7183C88.6039 15.2206 89.5806 13.0567 90.3965 11.2268C90.6685 10.6827 90.8053 10.2252 90.8053 9.8543C90.8053 9.64407 90.6871 9.46479 90.4522 9.31637C90.2173 9.16796 89.9275 9.06292 89.5806 9.00104C89.2344 8.93923 88.9501 8.90215 88.7275 8.88978C88.505 8.86506 88.3195 8.85277 88.1712 8.85277C88.0846 8.76617 88.0352 8.5498 88.0228 8.20352C88.0228 7.84496 88.0599 7.60387 88.1341 7.48022C89.433 7.65332 90.7303 7.73985 92.0292 7.73985C93.3026 7.73985 94.5884 7.65332 95.8865 7.48022C95.9607 7.57915 95.9978 7.80166 95.9978 8.14793C96.0102 8.48177 95.9731 8.71672 95.8865 8.85277C95.6393 8.85277 95.3426 8.87742 94.9964 8.92687C94.6626 8.96403 94.267 9.08765 93.8095 9.29787C93.3521 9.49566 93.043 9.7554 92.8823 10.0768C90.3595 15.4308 88.3195 19.7338 86.7618 22.9858C86.6258 23.2825 86.3785 23.8142 86.02 24.5808C85.6615 25.3473 85.4011 25.8791 85.2411 26.1758C85.0928 26.485 84.8571 26.8992 84.5357 27.4185C84.2142 27.9502 83.8688 28.4448 83.4979 28.9022C81.8405 30.9672 80.2704 31.9997 78.7861 31.9997C78.045 31.9997 77.4454 31.8019 76.9877 31.4063C76.5303 31.0229 76.3015 30.5654 76.3015 30.0337C76.3015 29.2671 76.586 28.6859 77.1541 28.2901C78.749 28.2901 79.986 28.1047 80.8638 27.7339C81.754 27.3629 82.5576 26.5839 83.2754 25.3969C83.6463 24.7663 84.0782 23.8884 84.5728 22.7631L78.4159 10.2623C78.205 9.78005 77.8341 9.42771 77.3033 9.20512C76.7834 8.97017 76.3755 8.85277 76.079 8.85277C75.98 8.692 75.9367 8.45705 75.9487 8.14793C75.9487 7.82645 75.9919 7.60387 76.079 7.48022C77.5752 7.65332 79.2443 7.73985 81.0864 7.73985Z"
            className="logo_sec"
          />
          <path
            d="M20.21 3.32539C18.2361 3.81797 16.4211 4.78813 14.6168 5.68677C9.97292 8.17048 5.50993 11.3017 2.52746 15.6194C0.89653 17.993 -0.0963595 20.8207 0.00741413 23.689C2.01984 19.6552 6.05127 16.9142 10.3004 15.3854C11.4214 14.9874 12.5743 14.6734 13.7454 14.4478C15.9903 10.7403 18.2351 7.03286 20.48 3.32539H20.21Z"
            className="logo_sec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2814 19.5319C15.0909 21.5212 12.0178 21.8115 9.21454 22.0314C6.88875 22.1333 4.55935 22.0666 2.23183 22.0858C1.32191 22.8864 0.539033 23.839 0 24.9345H18.065C17.9403 23.3407 17.8792 21.6001 18.7733 20.2027C18.3063 19.9325 17.8299 19.5826 17.2814 19.5319V19.5319Z"
            className="logo_sec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.71704 2.07741C0.843055 3.61322 0.905202 5.29053 0 6.63708L2.06291 7.8956C4.39542 6.41745 3.99454 4.84302 10.3236 4.84302C11.505 4.78988 12.7032 4.85574 13.8774 4.80435C16.0981 3.63192 18.4691 2.73318 20.9067 2.07741H0.71704Z"
            className="logo_sec"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.98682 21.1955C5.55948 19.5157 13.4676 18.5974 18.5157 18.5974C18.5157 18.5974 18.3846 17.2982 19.5509 13.777C20.7173 10.2557 23.0402 7.89684 23.0402 7.89684L18.3846 8.64465L14.7197 15.418C8.6616 16.2726 3.79202 19.6229 2.98682 21.1955Z"
            className="logo_pri"
          />
        </svg>

        {flag && (
          <span
            style={{
              position: 'absolute',
              top: '-6px',
              right: '-4px',
              lineHeight: '12px'
            }}
          >
            {data && data.country_code}
          </span>
        )}
      </div>
    </ActionLink>
  )
}

export default Logo
