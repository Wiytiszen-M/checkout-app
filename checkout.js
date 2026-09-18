document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('next');
    
    // Disable button to prevent double submission during transition
    button.onClick = null; 
    
    console.log("Navigating to payment step...");
    // window.location.href = '/payment';
});
