import "./loader.css"

const Loader = () => {
    return (
        <section>
            {/* 
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 300 150'>
                <path fill='none'
                    stroke='#FF156D'
                    stroke-width='15'
                    stroke-linecap='round'
                    stroke-dasharray='300 385'
                    stroke-dashoffset='0'
                    d='M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z'>
                    <animate
                        attributeName='stroke-dashoffset'
                        calcMode='spline'
                        dur='2'
                        values='685;-685'
                        keySplines='0 0 1 1'
                        repeatCount='indefinite'>
                    </animate>
                </path>
            </svg>
             */}
            <svg
                id="loader-svg"
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 200 200'>
                <circle
                    fill='none'
                    stroke-opacity='1'
                    stroke='#FF156D'
                    stroke-width='.5'
                    cx='100'
                    cy='100'
                    r='0'>
                    <animate
                        attributeName='r'
                        calcMode='spline'
                        dur='2'
                        values='1;80'
                        keyTimes='0;1'
                        keySplines='0 .2 .5 1'
                        repeatCount='indefinite'>
                    </animate>
                    <animate
                        attributeName='stroke-width'
                        calcMode='spline'
                        dur='2'
                        values='0;25'
                        keyTimes='0;1'
                        keySplines='0 .2 .5 1'
                        repeatCount='indefinite'>
                    </animate>
                    <animate
                        attributeName='stroke-opacity'
                        calcMode='spline'
                        dur='2'
                        values='1;0'
                        keyTimes='0;1'
                        keySplines='0 .2 .5 1'
                        repeatCount='indefinite'>
                    </animate>
                </circle>
            </svg>
        </section>
    )
}

export default Loader;