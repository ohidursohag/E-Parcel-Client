import Title from "../../../Components/Shared/Utilities/Title";
import ApexCharts from 'apexcharts'

import useAdminState from "../../../Hooks/useAdminState";
import { useEffect } from "react";
import HeaderStatusBox from "../../../Components/Shared/Utilities/HeaderStatusBox";
import { FaBox, FaUsers } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

const AdminStatistics = () => {
    
const {adminStatData,isLoading} = useAdminState()

    console.log(adminStatData);
    const bookingData = adminStatData?.numberOfBookingsByDate;
    const DeliveredData = adminStatData?.numberOfDeliveredByDate;
    const chartCategories = adminStatData?.bookingDates;

    // Render Bar Chart
    useEffect(() => {
        if (isLoading) return
        const barChartOptions = {
            series: [{
                data: bookingData,
            }],
            chart: {
                type: 'bar',
                height: 350,
                
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.1
                },
            },
            colors: ['#F97316'],
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,

                }
            },
            dataLabels: {
                enabled: true
            },
            xaxis: {
                categories: chartCategories,
            }
        };
        const chartOrigin = document.getElementById('barChart');
        if (chartOrigin) {
            const barChart = new ApexCharts(document.getElementById('barChart'), barChartOptions);
            barChart?.render();
        }
    }, [bookingData, chartCategories, isLoading])

    // Render Line Chart
    useEffect(() => {
        if (isLoading) return
        const lineChartOptions = {
            series: [
                {
                    name: "Parcel Booked",
                    data: bookingData
                },
                {
                    name: "Parcel Delivered",
                    data: DeliveredData
                }
            ],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            colors: ['#F97316','#868A08'],

            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: chartCategories,
            }
        };
        const chartOrigin2 = document.getElementById('lineChart');
        if (chartOrigin2) {
            const lineChart = new ApexCharts(document.getElementById('lineChart'), lineChartOptions);
            lineChart?.render();
        }
    }, [bookingData, DeliveredData, chartCategories, isLoading])



    
    return (
        <div className="space-y-10">
            <Title title="Statistics" />
            <div className="bg-white p-5 py-10 rounded-lg ">
                <div className="grid grid-cols-4 gap-5 mb-10">
                    <HeaderStatusBox
                        className={'bg-gradient-to-r  from-purple-500 to-purple-100'}
                        value={adminStatData?.totalUser}
                        statusName={'Total Users'}
                    >
                        <FaUsers size={52} />
                    </HeaderStatusBox>
                    <HeaderStatusBox
                        className={'bg-gradient-to-r  from-cyan-500  to-cyan-100'}
                        value={adminStatData?.totalDeliveryMan}
                        statusName={'Total Delivery Man'}
                    >
                        <MdDeliveryDining size={52} />
                    </HeaderStatusBox>
                    <HeaderStatusBox
                        className={'bg-gradient-to-r  from-yellow-500  to-yellow-100'}
                        value={adminStatData?.totalParcelBooked}
                        statusName={'Total Parcel Booked'}
                    >
                        <FaBox size={52} />
                    </HeaderStatusBox>
                    <HeaderStatusBox
                        className={'bg-gradient-to-r  from-lime-500  to-lime-100'}
                        value={adminStatData?.totalParcelDelivered}
                        statusName={'Total Parcel Delivered'}
                    >
                        <IoCheckbox size={52} />
                    </HeaderStatusBox>
                </div>
                <div >
                    <div className="text-2xl font-bold text-gray-600">Parcel Booked By Date Chart</div>
                    <div id="barChart"></div>
                </div>

                <div>
                    <div className="text-2xl font-bold text-gray-600">Parcel Bookings vs Delivered By Date comparison Chart</div>
                    <div id="lineChart"></div>
                </div>
            </div>
            
        </div>
    )
}
export default AdminStatistics;




