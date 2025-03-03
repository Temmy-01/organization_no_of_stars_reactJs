import { MutatingDots } from "react-loader-spinner"
import "./Loader.css"

export default function Loader() {
    return (
        <div className='loader-wrapper'>
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#405189"
                secondaryColor="#405189"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}