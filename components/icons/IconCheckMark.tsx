import * as React from 'react'
import Svg from './Svg'

type Props = {
  className?: string
}

const IconCheckMark: React.FC<Props> = ({ className }) => {
  return (
    <Svg className={className}>
      <path
        d="M12.2037 14.2717L16.4481 10.0327C16.6084 9.87206 16.6991 9.65432 16.6991 9.42733C16.6991 9.20034 16.6083 8.98252 16.448 8.82205C16.2878 8.66172 16.07 8.57146 15.8438 8.57153C15.6166 8.57146 15.3989 8.66164 15.2387 8.82213L10.9911 13.0644L9.1848 11.2581C9.10586 11.1766 9.01167 11.1107 8.90706 11.0662C8.80252 11.0216 8.69013 10.9975 8.57708 10.9966C8.46307 10.9958 8.35076 11.0173 8.24526 11.06C8.1399 11.1038 8.04483 11.1673 7.96426 11.2478C7.91128 11.3008 7.86504 11.3609 7.82746 11.4264C7.80844 11.4593 7.79165 11.4935 7.7773 11.5289C7.73446 11.6336 7.71308 11.7467 7.71389 11.8598C7.71426 11.9192 7.72099 11.9782 7.73372 12.0359C7.74533 12.0888 7.76191 12.1406 7.78321 12.1906C7.80763 12.2479 7.83819 12.302 7.87436 12.3522C7.90433 12.3939 7.93807 12.4326 7.97536 12.4684L9.78845 14.2821L10.3914 14.8823C10.7279 15.2172 11.2725 15.2148 11.606 14.877L12.2037 14.2717Z"
        fill="currentColor"
      />
    </Svg>
  )
}

export default IconCheckMark