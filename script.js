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



// Handle Interview Click
function handleInterviewClick(jobId) {
    const jobCard = document.getElementById(jobId);
    if(!jobCard) {
        alert('Job card not found!');
        return;
    }

    const badges = jobCard.querySelectorAll('.badge');
    const notAppliedBadge = badges[0];
    const appliedBadge = badges[1];
    const rejectedBadge = badges[2];
    
    if(!appliedBadge.classList.contains('hidden')) {
        alert('Already marked as Interview');
        return;
    }
    
    if(!rejectedBadge.classList.contains('hidden')) {
        rejectedCount--;
        interviewCount++;
        
        rejectedBadge.classList.add('hidden');
        appliedBadge.classList.remove('hidden');
        notAppliedBadge.classList.add('hidden');
        
        alert('Job moved from Rejected to Interview');
    } 
    else {
        interviewCount++;
        
        notAppliedBadge.classList.add('hidden');
        appliedBadge.classList.remove('hidden');
        
        alert('Job marked for Interview');
    }
    
    updateDashboard();
}

// Handle Reject Click
function handleRejectClick(jobId) {
    const jobCard = document.getElementById(jobId);
    if(!jobCard) {
        alert('Job card not found!');
        return;
    }

    const badges = jobCard.querySelectorAll('.badge');
    const notAppliedBadge = badges[0];
    const appliedBadge = badges[1];
    const rejectedBadge = badges[2];
    
    if(!rejectedBadge.classList.contains('hidden')) {
        alert('Already marked as Rejected');
        return;
    }
    
    if(!appliedBadge.classList.contains('hidden')) {
        interviewCount--;
        rejectedCount++;
        
        appliedBadge.classList.add('hidden');
        rejectedBadge.classList.remove('hidden');
        notAppliedBadge.classList.add('hidden');
        
        alert('Job moved from Interview to Rejected');
    } 
    else {
        rejectedCount++;
        
        notAppliedBadge.classList.add('hidden');
        rejectedBadge.classList.remove('hidden');
        
        alert('Job marked as Rejected');
    }
    
    updateDashboard();
}

// Handle Delete Click
function handleDeleteClick(jobId) {
    const jobCard = document.getElementById(jobId);
    if(!jobCard) {
        alert('Job card not found!');
        return;
    }

    const badges = jobCard.querySelectorAll('.badge');
    const appliedBadge = badges[1];
    const rejectedBadge = badges[2];
    
    if(!appliedBadge.classList.contains('hidden')) {
        interviewCount--;
    }
    else if(!rejectedBadge.classList.contains('hidden')) {
        rejectedCount--;
    }
    
    jobCard.remove();
    totalJobs--;
    
    updateDashboard();
    alert('Job Deleted Successfully');
}

// Setup Event Listeners for Job Cards
function setupJobCardListeners() {
    // Interview buttons
    document.getElementById('interview-btn-one').addEventListener('click', function() {
        handleInterviewClick('job1');
    });
    
    document.getElementById('interview-btn-two').addEventListener('click', function() {
        handleInterviewClick('job2');
    });
    
    document.getElementById('interview-btn-three').addEventListener('click', function() {
        handleInterviewClick('job3');
    });
    
    document.getElementById('interview-btn-four').addEventListener('click', function() {
        handleInterviewClick('job4');
    });
    
    document.getElementById('interview-btn-five').addEventListener('click', function() {
        handleInterviewClick('job5');
    });
    
    document.getElementById('interview-btn-six').addEventListener('click', function() {
        handleInterviewClick('job6');
    });
    
    document.getElementById('interview-btn-seven').addEventListener('click', function() {
        handleInterviewClick('job7');
    });
    
    document.getElementById('interview-btn-eight').addEventListener('click', function() {
        handleInterviewClick('job8');
    });
    
    // Reject buttons
    document.getElementById('rejected-btn-one').addEventListener('click', function() {
        handleRejectClick('job1');
    });
    
    document.getElementById('rejected-btn-two').addEventListener('click', function() {
        handleRejectClick('job2');
    });
    
    document.getElementById('rejected-btn-three').addEventListener('click', function() {
        handleRejectClick('job3');
    });
    
    document.getElementById('rejected-btn-four').addEventListener('click', function() {
        handleRejectClick('job4');
    });
    
    document.getElementById('rejected-btn-five').addEventListener('click', function() {
        handleRejectClick('job5');
    });
    
    document.getElementById('rejected-btn-six').addEventListener('click', function() {
        handleRejectClick('job6');
    });
    
    document.getElementById('rejected-btn-seven').addEventListener('click', function() {
        handleRejectClick('job7');
    });
    
    document.getElementById('rejected-btn-eight').addEventListener('click', function() {
        handleRejectClick('job8');
    });
    
    // Delete buttons
    document.getElementById('delete-btn-one').addEventListener('click', function() {
        handleDeleteClick('job1');
    });
    
    document.getElementById('delete-btn-two').addEventListener('click', function() {
        handleDeleteClick('job2');
    });
    
    document.getElementById('delete-btn-three').addEventListener('click', function() {
        handleDeleteClick('job3');
    });
    
    document.getElementById('delete-btn-four').addEventListener('click', function() {
        handleDeleteClick('job4');
    });
    
    document.getElementById('delete-btn-five').addEventListener('click', function() {
        handleDeleteClick('job5');
    });
    
    document.getElementById('delete-btn-six').addEventListener('click', function() {
        handleDeleteClick('job6');
    });
    
    document.getElementById('delete-btn-seven').addEventListener('click', function() {
        handleDeleteClick('job7');
    });
    
    document.getElementById('delete-btn-eight').addEventListener('click', function() {
        handleDeleteClick('job8');
    });
}

// Update initialization
document.addEventListener('DOMContentLoaded', function() {
    console.log('Commit 2: Job card interactions added');
    updateDashboard();
    setActiveFilter('all');
    setupJobCardListeners();
});