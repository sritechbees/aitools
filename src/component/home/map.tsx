import React from 'react'

const Map2 = () => {
  return (
   <div>
     <div className="pb-16">
        <h2 className="text-center font-semibold text-4xl pb-8">
          Other ways to <span className="text-primary">Reach Us</span>
        </h2>

        <div className="flex flex-wrap justify-center max-md:p-4 max-xl:px-6">
          {" "}
          {/* Centering the iframe */}
          <div className="relative w-full max-w-[1300px]">
            <iframe
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              className="w-full rounded-md h-96" // This makes the iframe full width
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31158.799177045417!2d78.1810060347656!3d12.526101200000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3369a3c3b071%3A0xa286ad83966b805a!2sTechbeeshive%20Technologies!5e0!3m2!1sen!2sin!4v1686810239080!5m2!1sen!2sin"
              loading="lazy"
              style={{ border: 0 }} // Optional: remove iframe border
              title="Google Maps"
            />
          </div>
        </div>
      </div>
   </div>
  )
}

export default Map2