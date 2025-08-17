import React, { useContext, useEffect } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { assets } from '../../assets/assets'; 
import { AppContext } from '../../context/AppContext';

const DoctorDashboard = () => {
  const { dToken, dashData,setDashData, getDashData } = useContext(DoctorContext)
  const {currency} = useContext(AppContext)

  useEffect(() => {
    if (dToken) {
      getDashData();
    }
  }, [dToken]);


  return dashData && (
    <div className="m-5">
      <div className="flex flex-wrap gap-3">


        {/* Earnings */}
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-200">
          <img className="w-14" src={assets.earning_icon} alt="Earnings" />
          <div>
            <p className="text-xl font-semibold text-gray-600">{currency} {dashData.earnings}</p>
            <p className="text-gray-400">Earnings</p>
          </div>
        </div>

        {/* Appointments */}
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-200">
          <img className="w-14" src={assets.appointments_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">{dashData.appointments}</p>
            <p className="text-gray-400">Appointments</p>
          </div>
        </div>

        {/* Patients */}
        <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-200">
          <img className="w-14" src={assets.patients_icon} alt="" />
          <div>
            <p className="text-xl font-semibold text-gray-600">{dashData.patients}</p>
            <p className="text-gray-400">Patients</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorDashboard;