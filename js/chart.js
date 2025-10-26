const ctxs = document.querySelectorAll(".status");
ctxs.forEach((ctx) => {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Growth",
          data: [6, 12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: { display: false },
      },
    },
  });
});

const clientsGrowthChart = document.getElementById("clientsGrowthChart");

new Chart(clientsGrowthChart, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Clients Growth",
        data: [12, 19, 13, 25, 22, 30, 35],
        borderWidth: 2,
        borderColor: "#8B5CF6", // purple accent
        backgroundColor: "rgba(139, 92, 246, 0.15)",
        tension: 0.4, // smooth line
        fill: true,
        pointBackgroundColor: "#C084FC",
        pointRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#E2E8F0", font: { size: 13 } },
      },
      title: {
        display: true,
        text: "Clients Growth (Last 7 Days)",
        color: "#E2E8F0",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#94A3B8", font: { size: 12 } },
        grid: { color: "#2F2F40" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#94A3B8", font: { size: 12 } },
        grid: { color: "#2F2F40" },
      },
    },
  },
});

// === Projects Trend (Bar Chart) ===
const projectsTrendChart = document.getElementById("projectsTrendChart");

new Chart(projectsTrendChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projects Growth",
        data: [8, 12, 6, 10, 14, 18],
        backgroundColor: [
          "#6366F1", // Indigo
          "#3B82F6", // Blue
          "#06B6D4", // Cyan
          "#10B981", // Green
          "#F59E0B", // Amber
          "#EF4444", // Red
        ],
        borderRadius: 10,
        borderSkipped: false,
        hoverBackgroundColor: "#8B5CF6",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#E2E8F0",
          font: { size: 13, weight: "500" },
        },
      },
      title: {
        display: true,
        text: "Projects Growth Overview",
        color: "#F8FAFC",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        ticks: { color: "#CBD5E1", font: { size: 12 } },
        grid: { color: "#2F2F40" },
      },
      y: {
        beginAtZero: true,
        ticks: { color: "#CBD5E1", font: { size: 12 } },
        grid: { color: "#2F2F40" },
      },
    },
  },
});

const revenueChart = document.getElementById("revenueChart");

new Chart(revenueChart, {
  type: "bar",
  data: {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Revenue Growth",
        data: [35, 50, 40, 65, 55, 80],
        backgroundColor: [
          "#4F46E5",
          "#6366F1",
          "#818CF8",
          "#A5B4FC",
          "#C7D2FE",
          "#E0E7FF",
        ],
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  },
  options: {
    indexAxis: "y", // 👈 Horizontal bar chart
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#E2E8F0", // light text
          font: { size: 13 },
        },
      },
      title: {
        display: true,
        text: "Revenue Growth Overview",
        color: "#E2E8F0",
        font: { size: 16, weight: "bold" },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "#94A3B8",
          font: { size: 12 },
        },
        grid: { color: "#2F2F40" },
      },
      y: {
        ticks: {
          color: "#94A3B8",
          font: { size: 12 },
        },
        grid: { color: "#2F2F40" },
      },
    },
  },
});
