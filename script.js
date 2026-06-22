document.addEventListener('DOMContentLoaded', () => {
    console.log("Önéletrajz betöltve.");
    
    const refSection = document.querySelector('.experience');
    refSection.addEventListener('click', () => {
        alert("Referenciák kérésre rendelkezésre állnak!");
    });
});