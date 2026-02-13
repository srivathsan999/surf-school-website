const blogData = {
    'top-10': {
        title: "Top 10 Spots for Beginners in California",
        category: "Featured",
        date: "Oct 12, 2024",
        readTime: "8 Min Read",
        author: "Kai Waterman",
        heroImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
        content: `
            <p class="lead text-secondary mb-4">California is a surfer's paradise, but not all breaks are created equal. Here are the best spots to catch your first wave without getting crushed.</p>
            
            <h3 class="h4 fw-bold mt-4 mb-3">1. Cowell's Beach, Santa Cruz</h3>
            <p class="mb-4 text-secondary">Known for its long, gentle right-hand point break, Cowell's is perfect for longboarders and beginners. The vibe is mellow, and the waves roll in consistently.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">2. Doheny State Beach, Dana Point</h3>
            <p class="mb-4 text-secondary">A classic longboard spot with a friendly atmosphere. The bottom is rocky but flat, and the waves are slow-rolling, giving you plenty of time to pop up.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">3. La Jolla Shores, San Diego</h3>
            <p class="mb-4 text-secondary">A sandy beach break that offers consistent waves year-round. It's home to many surf schools, so you'll be in good company.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">4. Mondos, Ventura</h3>
            <p class="mb-4 text-secondary">A hidden gem for learners. The waves here are small and spill gently, making it an ideal place to practice your paddle and pop-up technique.</p>

             <blockquote class="border-start border-4 border-primary ps-4 fst-italic text-dark my-5">
                "The best surfer out there is the one having the most fun. Pick a spot that matches your skill level and enjoy the ride."
            </blockquote>

            <h3 class="h4 fw-bold mt-4 mb-3">5. Bolinas, Marin County</h3>
            <p class="mb-4 text-secondary">North of San Francisco, this secluded spot offers a protected bay with small, manageable waves. Great for escaping the city crowds.</p>
        `
    },
    'forecast': {
        title: "How to Read a Surf Forecast",
        category: "Tips & Tricks",
        date: "Sep 28, 2024",
        readTime: "5 Min Read",
        author: "Sarah Jenkins",
        heroImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop", // Matches blog.html
        content: `
            <p class="lead text-secondary mb-4">Understanding the ocean is the first step to becoming a better surfer. Here is everything you need to know about swell data.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">1. Swell Height vs. Wave Height</h3>
            <p class="mb-4 text-secondary">Swell height refers to the size of the wave in open ocean. Breaking wave height depends on the beach topography and how the swell interacts with the ocean floor.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">2. Swell Period</h3>
            <p class="mb-4 text-secondary">The time in seconds between two wave crests. A longer period (10s+) usually means more power and cleaner waves. Short period swells (under 8s) tend to be messy and weak.</p>

            <blockquote class="border-start border-4 border-primary ps-4 fst-italic text-dark my-5">
                "The wind is the brush that paints the ocean's surface. Ideally, you want no wind or offshore wind."
            </blockquote>

            <h3 class="h4 fw-bold mt-4 mb-3">3. Wind Direction</h3>
            <p class="mb-4 text-secondary">Offshore wind blows from land to sea, grooming the waves and holding them up. Onshore wind blows from sea to land, making them choppy and difficult to ride.</p>
        `
    },
    'wetsuit': {
        title: "Choosing Your First Wetsuit",
        category: "Gear Guide",
        date: "Sep 15, 2024",
        readTime: "6 Min Read",
        author: "Mike Ross",
        heroImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKBP08xJ6n6XLWpwidv_HaFwHdds2OYLJVPg&s", // Matches blog.html
        content: `
            <p class="lead text-secondary mb-4">A good wetsuit is the difference between a 20-minute shivering session and a 2-hour marathon. Here's how to pick the right one.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">Thickness Matters</h3>
            <p class="mb-4 text-secondary">Wetsuit thickness is measured in millimeters (e.g., 4/3mm). The first number is the thickness on the torso, and the second is on the limbs. For California winters, a 4/3 is standard. Summers might only need a 3/2.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">Zip Systems</h3>
            <p class="mb-4 text-secondary"><strong>Back Zip:</strong> Easiest to get on and off, but can let water in.<br><strong>Chest Zip:</strong> Harder to enter, but warmer and more flexible.<br><strong>Zipperless:</strong> Maximum flexibility, but tricky to put on.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">Fit is King</h3>
            <p class="mb-4 text-secondary">It should feel tight dry! Wetsuits expand slightly when wet. Any loose folds will fill with cold water and flush you out.</p>
        `
    },
    'cleanup': {
        title: "Beach Cleanup Day Recap",
        category: "Community",
        date: "Sep 01, 2024",
        readTime: "3 Min Read",
        author: "Team SurfSchool",
        heroImage: "https://media.istockphoto.com/id/1435005446/photo/recyclers-cleaning-the-beach.jpg?s=612x612&w=0&k=20&c=92lBY2A3i0c32_1wd_tTulVcaW0crv8jItFucmS75qo=",
        content: `
            <p class="lead text-secondary mb-4">Last weekend, over 50 volunteers joined us for our monthly beach cleanup. The results were inspiring!</p>

            <h3 class="h4 fw-bold mt-4 mb-3">The Haul</h3>
            <p class="mb-4 text-secondary">We collected over 200lbs of trash from the coastline. Most of it was micro-plastics and cigarette butts, which are incredibly harmful to marine life.</p>

            <h3 class="h4 fw-bold mt-4 mb-3">Community Vibes</h3>
            <p class="mb-4 text-secondary">After the hard work, we celebrated with a BBQ and a free surf session for all volunteers. It was amazing to see the surf community come together to protect our playground.</p>

             <blockquote class="border-start border-4 border-primary ps-4 fst-italic text-dark my-5">
                "Protect what you love. Leave only footprints."
            </blockquote>

            <p class="mb-4 text-secondary">Join us next month! Check our events calendar for the next date.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id') || 'forecast'; // Default to forecast if no ID
    const data = blogData[blogId];

    if (data) {
        // Update Meta Title
        document.title = `${data.title} | Surf School Blog`;

        // Update Content
        document.querySelector('#blog-hero-img').src = data.heroImage;
        document.querySelector('#blog-category').textContent = data.category;
        document.querySelector('#blog-title').textContent = data.title;
        document.querySelector('#blog-date').textContent = data.date;
        document.querySelector('#blog-read-time').textContent = data.readTime;
        document.querySelector('#blog-content').innerHTML = data.content;
    }
});
