  // View More Button
        const viewMoreBtn = document.getElementById('view-more-btn');
        const hiddenImages = document.querySelectorAll('.gallery-hidden');

        viewMoreBtn.addEventListener('click', () => {
            hiddenImages.forEach(img => {
                img.classList.toggle('hidden');
            });
            viewMoreBtn.textContent = viewMoreBtn.textContent === 'View More' ? 'View Less' : 'View More';
        });

        // Image Modal Functionality
        const modal = document.getElementById('image-modal');
        const modalImage = document.getElementById('modal-image');
        const closeModal = document.getElementById('close-modal');
        const prevImage = document.getElementById('prev-image');
        const nextImage = document.getElementById('next-image');
        const galleryImages = document.querySelectorAll('.gallery-image');
        let currentImageIndex = 0;

        galleryImages.forEach((image, index) => {
            image.addEventListener('click', () => {
                currentImageIndex = index;
                modalImage.src = image.dataset.src;
                modalImage.alt = image.querySelector('img').alt;
                modal.style.display = 'flex';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        prevImage.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex].dataset.src;
            modalImage.alt = galleryImages[currentImageIndex].querySelector('img').alt;
        });

        nextImage.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            modalImage.src = galleryImages[currentImageIndex].dataset.src;
            modalImage.alt = galleryImages[currentImageIndex].querySelector('img').alt;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'flex') {
                if (e.key === 'ArrowLeft') {
                    prevImage.click();
                } else if (e.key === 'ArrowRight') {
                    nextImage.click();
                } else if (e.key === 'Escape') {
                    closeModal.click();
                }
            }
        });

        // Hero Image Slider
        const sliderImages = document.querySelectorAll('.slider-image');
        let currentSlide = 0;

        function showSlide(index) {
            sliderImages.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % sliderImages.length;
            showSlide(currentSlide);
        }

        // Initialize slider
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds