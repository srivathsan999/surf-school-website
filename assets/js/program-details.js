const programsData = {
    'intro': {
        title: "Introduction to Surfing",
        badge: "Beginner",
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
        price: "$60",
        duration: "2 Hours",
        description: "The perfect starting point for your surfing journey. Learn the fundamentals in a safe environment with patient instructors who will have you standing up in no time.",
        learnings: [
            { title: "Ocean Safety", desc: "Understanding currents, tides, and potential hazards." },
            { title: "Paddling Technique", desc: "Strong paddling for catching waves effectively." },
            { title: "The Pop-Up", desc: "Mastering the transition from prone to standing." },
            { title: "Board Control", desc: "Handling the surfboard in and out of the water." }
        ],
        instructor: "Kai Waterman",
        instructorRole: "Senior Instructor • 10 Years Experience",
        instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    },
    'intermediate': {
        title: "Wave Selection & Turns",
        badge: "Intermediate",
        image: "https://images.unsplash.com/photo-1415931633537-351139717d27?q=80&w=2072&auto=format&fit=crop", // Distinct image
        price: "$80",
        duration: "3 Hours",
        description: "Ready to go beyond the whitewater? This course focuses on reading the ocean, catching unbroken green waves, and executing your first bottom turns.",
        learnings: [
            { title: "Wave Reading", desc: "Identifying the peak and direction of breaking waves." },
            { title: "Angled Take-Offs", desc: "dropping into the wave face smoothly." },
            { title: "Bottom Turns", desc: "Generating speed and direction from the bottom." },
            { title: "Lineup Etiquette", desc: "Navigating the surf zone respectfully." }
        ],
        instructor: "Sarah Jenkins",
        instructorRole: "Pro Surfer • 8 Years Coaching",
        instructorImg: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    'advanced': {
        title: "High Performance",
        badge: "Advanced",
        image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=2070&auto=format&fit=crop",
        price: "$120",
        duration: "4 Hours",
        description: "Refine your style and technique with video analysis. We focus on advanced maneuvers like cutbacks, floaters, and generating speed on the wave.",
        learnings: [
            { title: "Video Analysis", desc: "Frame-by-frame breakdown of your technique." },
            { title: "Snap & Cutback", desc: "Sharp turns in the pocket of the wave." },
            { title: "Speed Generation", desc: "Pumping to make sections." },
            { title: "barrel Riding", desc: "Positioning for the ultimate ride." }
        ],
        instructor: "Jay Cortez",
        instructorRole: "Former Competitor • Performance Coach",
        instructorImg: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2000&auto=format&fit=crop"
    },
    'kids': {
        title: "Grom Squad",
        badge: "Kids",
        image: "https://images.unsplash.com/photo-1502933691298-84fc14542831?q=80&w=2070&auto=format&fit=crop",
        price: "$45",
        duration: "1.5 Hours",
        description: "A fun and safe environment for kids to fall in love with the ocean. We focus on confidence, water safety, and having a blast in the waves.",
        learnings: [
            { title: "Water Confidence", desc: "Building comfort in the surf zone." },
            { title: "Safe Wipeouts", desc: "How to fall and recover safely." },
            { title: "Teamwork", desc: "Surfing with friends and supporting each other." },
            { title: "Basic Riding", desc: "Catching small waves to shore." }
        ],
        instructor: "Lani Moana",
        instructorRole: "Kids Specialist • 5 Years Experience",
        instructorImg: "https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&w=2000&auto=format&fit=crop"
    },
    'camp': {
        title: "Weekend Surf Camp",
        badge: "Camp",
        image: "https://images.unsplash.com/photo-1528157774130-10901df6081e?q=80&w=2070&auto=format&fit=crop",
        price: "$300",
        duration: "2 Days",
        description: "Immerse yourself in the surf lifestyle. Two full days of coaching, yoga sessions, video review, and hanging out with like-minded people.",
        learnings: [
            { title: "Intensive Coaching", desc: "Multiple in-water sessions per day." },
            { title: "Yoga for Surfers", desc: "Recovery and flexibility sessions." },
            { title: "Video Review", desc: "Evening analysis of your day's waves." },
            { title: "Community", desc: "Campfire dinners and social vibes." }
        ],
        instructor: "Team SurfSchool",
        instructorRole: "All Instructors",
        instructorImg: "https://images.unsplash.com/photo-1528157774130-10901df6081e?q=80&w=200&auto=format&fit=crop"
    },
    'yoga': {
        title: "Surf & Yoga Retreat",
        badge: "Wellness",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
        price: "$85",
        duration: "4 Hours",
        description: "Balance the adrenaline of surfing with the calm of yoga. Start with a surf session and end with a guided beach yoga flow to stretch and relax.",
        learnings: [
            { title: "Mindfulness", desc: "Connecting breath with movement." },
            { title: "Balance", desc: "Improving stability on and off the board." },
            { title: "Flexibility", desc: "Stretching key muscles used in surfing." },
            { title: "Relaxation", desc: "Guided meditation by the ocean." }
        ],
        instructor: "Elena Rodriguez",
        instructorRole: "Yoga Teacher & Surf Coach",
        instructorImg: "https://randomuser.me/api/portraits/women/68.jpg"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const programId = params.get('id') || 'intro'; // Default to intro if no ID
    const data = programsData[programId];

    if (data) {
        // Update Meta Title
        document.title = `${data.title} | Surf School`;

        // Update Text Content
        document.querySelector('#program-badge').textContent = data.badge;
        document.querySelector('#program-title').textContent = data.title;
        document.querySelector('#program-desc').textContent = data.description;
        document.querySelector('#program-price').textContent = data.price;
        document.querySelector('#program-duration').textContent = data.duration;

        // Update Images
        const heroImg = document.querySelector('#hero-img');
        if (heroImg) heroImg.src = data.image;

        // Update Learnings
        const learningContainer = document.querySelector('#learning-container');
        if (learningContainer) {
            learningContainer.innerHTML = ''; // Clear existing
            data.learnings.forEach(item => {
                const col = document.createElement('div');
                col.className = 'col-md-6';
                col.innerHTML = `
                    <div class="d-flex gap-3">
                        <div class="text-primary"><i class="fas fa-check-circle fa-lg"></i></div>
                        <div>
                            <h4 class="h6 fw-bold">${item.title}</h4>
                            <p class="text-secondary small">${item.desc}</p>
                        </div>
                    </div>
                `;
                learningContainer.appendChild(col);
            });
        }

        // Update Instructor
        document.querySelector('#instructor-name').textContent = data.instructor;
        document.querySelector('#instructor-role').textContent = data.instructorRole;
        document.querySelector('#instructor-img').src = data.instructorImg;
    }
});
