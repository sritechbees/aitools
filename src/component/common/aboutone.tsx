export default function Aboutone() {
    return (
      <section className="bg-gray-900 text-white py-28 px-6 md:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            We are pioneers in AI-driven solutions leveraging drone, satellite, and cutting-edge technologies
            to transform industries. Our innovative software integrates real-time data processing,
            predictive analytics, and automation to provide accurate insights and operational efficiency.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Drone Technology</h3>
              <p className="text-gray-300">
                We utilize AI-powered drones for surveillance, mapping, and automated data collection,
                ensuring efficiency and precision.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Satellite Integration</h3>
              <p className="text-gray-300">
                Our software seamlessly integrates satellite data for enhanced monitoring, tracking, and
                predictive analytics across industries.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">AI & Automation</h3>
              <p className="text-gray-300">
                Advanced AI algorithms analyze vast amounts of data, providing real-time insights and automating
                critical decision-making processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  