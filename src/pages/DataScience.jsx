import React, { useState, useCallback, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { PieChart, Pie, Cell } from "recharts";

const DataScience = () => {
  const [step, setStep] = useState(1);

  const [imageFile, setImageFile] = useState(null);
  const [yoloResult, setYoloResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const [location, setLocation] = useState("Home");
  const [capacity, setCapacity] = useState(5);
  const [sunHours, setSunHours] = useState(5);
  const [fileName, setFileName] = useState("No file chosen");

  // Backend URL (ALWAYS include trailing slash)
  const BACKEND_URL = "https://energy-project-backend-ol3t.onrender.com/";

  const pageStyle = {
    background: "linear-gradient(135deg, #003d7a, #0059b3, #007bff, #4dabf7)",
    minHeight: "100vh",
    paddingTop: "150px",
    paddingBottom: "70px",
  };

  const glassCard = {
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(12px)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.3)",
    padding: "35px",
    boxShadow: "0px 10px 40px rgba(0,0,0,0.25)",
  };

  const ProgressSteps = () => (
    <div className="d-flex justify-content-center gap-4 my-4">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          onClick={() => setStep(n)}
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            border: "3px solid white",
            color: step === n ? "#0059b3" : "white",
            background: step === n ? "white" : "transparent",
            fontWeight: "700",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {n}
        </div>
      ))}
    </div>
  );

  // ------------------ RUN YOLO API ------------------
  const runYOLO = async () => {
    if (!imageFile) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("greyImage", imageFile);
    formData.append("location", location);
    formData.append("capacity", capacity);
    formData.append("sunHours", sunHours);

    try {
      const response = await fetch(BACKEND_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const text = await response.text();
        console.error("Server Error:", text);
        alert("Backend error occurred. Check backend backend logs.");
        setLoading(false);
        return;
      }

      const data = await response.json();
      setYoloResult(data);
      setStep(3);
    } catch (err) {
      console.error("Fetch Error:", err);
      alert("Unable to connect to backend.");
    }

    setLoading(false);
  };

  // ------------------ STEP 1 ------------------
  const Step1 = () => (
    <div className="container text-white">
      <div className="mx-auto text-center" style={{ ...glassCard, maxWidth: "750px" }}>
        <h1 className="fw-bold mb-3" style={{ fontSize: "2.4rem" }}>
          ☀️ Solar Energy AI Predictor
        </h1>

        <p>
          Upload your solar panel image — AI detects cracks, dust, snow, bird
          drops and calculates energy loss.
        </p>

        <button
          className="btn btn-light fw-bold px-5 py-2 rounded-pill shadow"
          onClick={() => setStep(2)}
        >
          Start →
        </button>
      </div>
    </div>
  );

  // ------------------ STEP 2 ------------------
  const Step2 = () => {
    const RightSideContent = useMemo(
      () => (
        <div className="ratio ratio-16x9 rounded shadow-lg">
          <video controls style={{ width: "100%", borderRadius: "12px" }}>
            <source src="/Video/solar.mp4" type="video/mp4" />
          </video>
        </div>
      ),
      []
    );

    const handleFileChange = useCallback((e) => {
      const file = e.target.files[0];
      setImageFile(file);
      setFileName(file ? file.name : "No file chosen");
    }, []);

    return (
      <div className="container text-white">
        <div className="mx-auto" style={{ ...glassCard, maxWidth: "980px" }}>
          <ProgressSteps />

          <h2 className="fw-bold text-center mb-4">✨ Solar Panel Input</h2>

          <div className="row g-4">
            {/* left Form */}
            <div className="col-md-6">
              <label className="fw-bold mb-1">📍 Location</label>
              <select
                className="form-select p-3 shadow-sm mb-3"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{ borderRadius: "14px" }}
              >
                <option>Home</option>
                <option>Office</option>
                <option>Factory</option>
                <option>Agriculture</option>
                <option>Solar Plant</option>
              </select>

              <label className="fw-bold mb-1">⚡ System Capacity (kW)</label>
              <input
                type="number"
                className="form-control p-3 shadow-sm mb-3"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                style={{ borderRadius: "14px" }}
              />

              <label className="fw-bold mb-1">🌞 Sun Hours</label>
              <input
                type="number"
                className="form-control p-3 shadow-sm mb-3"
                value={sunHours}
                onChange={(e) => setSunHours(e.target.value)}
                style={{ borderRadius: "14px" }}
              />

              <label className="fw-bold mb-2">🖼 Upload Image</label>
              <div
                className="d-flex align-items-center p-2 shadow-sm mb-4"
                style={{
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <input
                  type="file"
                  onChange={handleFileChange}
                  style={{ position: "absolute", inset: 0, opacity: 0 }}
                />

                <button className="btn btn-light btn-sm fw-bold me-2">Choose File</button>

                <span>{fileName}</span>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <button
                  className="btn btn-outline-light px-4"
                  onClick={() => setStep(1)}
                >
                  ← Back
                </button>
                <button
                  className="btn btn-light px-4 fw-bold"
                  onClick={runYOLO}
                >
                  {loading ? "Processing..." : "Analyze →"}
                </button>
              </div>
            </div>

            {/* Right Video */}
            <div className="col-md-6 mt-4">{RightSideContent}</div>
          </div>
        </div>
      </div>
    );
  };

  // ------------------ STEP 3 ------------------
  const Step3 = () => {
    if (!yoloResult) return null;

    const maxEnergy = capacity * sunHours;
    const totalLoss = yoloResult.summary.total_daily_loss_kwh;
    const finalEnergy = maxEnergy - totalLoss;

    const pieData = [
      { name: "Usable Energy", value: finalEnergy },
      { name: "Energy Loss", value: totalLoss },
    ];

    const COLORS = ["#00d99b", "#ff5252"];

    return (
      <div className="container text-white">
        <div className="mx-auto" style={{ ...glassCard, maxWidth: "900px" }}>
          <ProgressSteps />

          <h2 className="text-center fw-bold mb-4">
            📊 Solar Panel Energy Loss Analysis
          </h2>

          {/* Result Image */}
          <img
            src={`${BACKEND_URL}${yoloResult.download_url}`}
            className="img-fluid rounded shadow mb-4"
            style={{ border: "2px solid white" }}
            alt="Detection"
          />

          {/* Pie Chart */}
          <div className="text-center">
            <PieChart width={350} height={350}>
              <Pie
                data={pieData}
                innerRadius={100}
                outerRadius={140}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </div>

          {/* Panel Breakdown */}
          <h4 className="fw-bold mt-4 mb-3">🟦 Panel-wise Breakdown</h4>

          {yoloResult.panel_analysis.map((panel, idx) => (
            <div key={idx} className="mb-5">
              <div className="row g-4">
                {/* Left Column */}
                <div className="col-md-6">
                  <div
                    className="p-3 rounded shadow"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    <h5 className="fw-bold mb-3">Panel {panel.panel_number}</h5>

                    {panel.faults_left.length > 0 ? (
                      panel.faults_left.map((f, i) => (
                        <div
                          key={i}
                          className="p-3 mb-3 rounded"
                          style={{ background: "rgba(0,0,0,0.25)" }}
                        >
                          <p><b>Fault:</b> {f.fault}</p>
                          <p><b>Confidence:</b> {(f.confidence * 100).toFixed(1)}%</p>
                          <p><b>Affected:</b> {f.affected_area}%</p>
                          <p><b>Loss %:</b> {f.loss_percentage}%</p>
                          <p className="text-warning fw-bold">🌞 Daily Loss: {f.daily_loss} kWh</p>
                        </div>
                      ))
                    ) : (
                      <div className="alert alert-success">✔ No visible faults</div>
                    )}
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <div
                    className="p-3 rounded shadow"
                    style={{ background: "rgba(255,255,255,0.18)" }}
                  >
                    <h5 className="fw-bold mb-3">More Details</h5>

                    {panel.faults_right.length > 0 ? (
                      panel.faults_right.map((f, i) => (
                        <div
                          key={i}
                          className="p-3 mb-3 rounded"
                          style={{ background: "rgba(0,0,0,0.25)" }}
                        >
                          <p><b>Fault:</b> {f.fault}</p>
                          <p><b>Confidence:</b> {(f.confidence * 100).toFixed(1)}%</p>
                          <p><b>Affected:</b> {f.affected_area}%</p>
                          <p><b>Loss %:</b> {f.loss_percentage}%</p>
                          <p className="text-warning fw-bold">🌞 Daily Loss: {f.daily_loss} kWh</p>
                        </div>
                      ))
                    ) : (
                      <div className="alert alert-success">✔ No additional faults</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="text-center mt-3">
                <div
                  className="p-3 rounded shadow d-inline-block"
                  style={{ background: "rgba(255,255,255,0.20)" }}
                >
                  <h4 className="fw-bold text-white mb-0">
                    ⚡ Panel Loss {panel.panel_loss_kwh} kWh
                  </h4>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <a
              href={`${BACKEND_URL}${yoloResult.download_url}`}
              className="btn btn-success px-4"
              download
            >
              Download Annotated Image
            </a>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-outline-light px-4"
              onClick={() => setStep(2)}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={pageStyle}>
      {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : <Step3 />}
    </div>
  );
};

export default DataScience;
