// State Management
let interviewCount = 0;
let rejectedCount = 0;
let totalJobs = 8;
let currentFilter = 'all';

// Get DOM Elements
const interviewCountEl = document.getElementById('interview-dashBoard');
const rejectedCountEl = document.getElementById('rejected-dashBoard');
const totalCountEl = document.getElementById('totalCount');
const emptyJobsSection = document.getElementById('emptyJobsSection');
const emptyInterviewSection = document.getElementById('empty-job-apply');
const emptyRejectedSection = document.getElementById('empty-job-reject');
const jobsSection = document.querySelector('.jobs');

// Get Filter Buttons
const filterAllBtn = document.getElementById('filter-btn-all');
const filterInterviewBtn = document.getElementById('filter-btn-interview');
const filterRejectedBtn = document.getElementById('filter-btn-rejected');

// Helper Function - Update Dashboard
function updateDashboard() {
    totalCountEl.innerText = totalJobs;
    interviewCountEl.innerText = interviewCount;
    rejectedCountEl.innerText = rejectedCount;
}

// Helper Function - Set Active Filter Button
function setActiveFilter(filter) {
    currentFilter = filter;
    
    filterAllBtn.classList.remove('bg-[#002C5C]', 'text-white');
    filterInterviewBtn.classList.remove('bg-[#002C5C]', 'text-white');
    filterRejectedBtn.classList.remove('bg-[#002C5C]', 'text-white');
    
    if(filter === 'all') {
        filterAllBtn.classList.add('bg-[#002C5C]', 'text-white');
    }
    else if(filter === 'interview') {
        filterInterviewBtn.classList.add('bg-[#002C5C]', 'text-white');
    }
    else if(filter === 'rejected') {
        filterRejectedBtn.classList.add('bg-[#002C5C]', 'text-white');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Commit 1: Dashboard initialized');
    updateDashboard();
    setActiveFilter('all');
});