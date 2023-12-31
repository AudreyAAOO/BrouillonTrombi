try {
  //? écouteur de fin de chargement de page DOMContentLoaded
  //? pour avoir la certitude que tous les éléments du DOM sont chargés
  document.addEventListener("DOMContentLoaded", () => {
    console.log("Content Loaded");

    const buttons = document.querySelectorAll('#nomVilles');
    // const buttons = document.querySelectorAll('.bouton, ');
    const modal = document.querySelector(".modal")
    const cadreForm = document.querySelector(".cadreForm");

    // Ajoutez un gestionnaire d'événement à chaque bouton
    buttons.forEach((button) => {
      button.addEventListener("click", () => {

        // Obtenez le nom de la ville à partir de l'attribut "data-ville"
        const ville = button.getAttribute('data-ville');
        console.log("data-ville", ville);

        fetchDataForVille(ville);

        //! ouvrir la modal 。。+゜゜。。+゜゜。。+゜゜。。+゜
        modal.classList.add("modalHidden");
        cadreForm.classList.add("cadreFormHidden");

      });
    });

    //! Cacher la modal 。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜゜。。+゜
    const echap = document.querySelector("#echap");
    echap.addEventListener("click", () => {
      console.log("ferme modal X");
      document.querySelector(".modal").classList.remove("modalHidden");
      document
        .querySelector(".cadreForm")
        .classList.remove("cadreFormHidden");
    });
  });
  // });
} catch (error) {
  res.status(400).json(error.message);
}