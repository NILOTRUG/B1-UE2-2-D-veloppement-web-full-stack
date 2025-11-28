// *****************************************************
// --- 1. DONNÉES DE L'APPLICATION ---
// *****************************************************

// Tableau des événements. 
let events = [
    { 
        id: 1, 
        title: 'Nuit de l\'IA', 
        start: '2025-11-25T18:00:00', 
        location: 'Amphi Turing', 
        desc: 'Débat sur l\'avenir des LLM avec des experts de DeepMind.', 
        category: 'Conférence', 
        spots: 120, // Places totales
        registered: 80, // Places prises 
        img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600',
    },
    { 
        id: 2, 
        title: 'Techno Party', 
        start: '2025-11-28T22:00:00', 
        location: 'Le Bunker', 
        desc: 'La soirée underground du campus.', 
        category: 'Soirée', 
        spots: 300, 
        registered: 250, 
        img: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600',
    },
    { 
        id: 3, 
        title: 'Atelier Python', 
        start: '2025-12-05T10:00:00', 
        location: 'Labo C', 
        desc: 'Introduction aux bases du langage Python. Venez avec votre ordinateur.', 
        category: 'Workshop', 
        spots: 30, 
        registered: 28, 
        img: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=600',
    }
];

// *****************************************************
// --- 2. FONCTION POUR AFFICHER LA GRILLE DES CARTES ---
// *****************************************************


function renderEventsGrid() {                             // Nom de la fonction
    const grid = document.getElementById('events-grid');  // cherche dans le HTML l’élément qui a id="events-grid", grid = notre boîte
    

if (!grid) {
        return; // Si l'élément n'existe pas (ex: on est sur calendrier.html), on arrête la fonction ici.
    }


    let htmlContent = '';                                 // Prépare une variable pour stocker le futur HTML

    events.forEach(e => {                                 // Parcours de tous les événements : pour chaque événement e dans la liste events
        
        // Construction de la carte HTML
        // fas fa-... = icône
        // e.title = nom de l'évènement 
        // toLocaleDateString('fr-FR')} : formate une date dans le style français
        htmlContent += `  
        <div class="event-card"> 
            <div class="event-image">
                <img src="${e.img}" alt="${e.title}">
            </div>
            <div class="event-info">
                <h3>${e.title}</h3>
                
                <div class="event-details">
                    
                
                    <div class="event-detail-line"> 
                        <i class="fas fa-calendar"></i> ${new Date(e.start).toLocaleDateString('fr-FR')}  
                    </div>
                    
                    <div class="event-detail-line">
                        <i class="fas fa-map-marker-alt"></i> ${e.location}
                    </div>
                    
                </div>
                
                <div class="event-spots">
                    <i class="fas fa-users"></i> ${e.spots} places totales ! 
                </div>
            </div>
        </div>`;
    });
    // Injection du HTML dans la page
    grid.innerHTML = htmlContent;     // htmlContent : contient toutes les cartes 
                                      // remplaces le contenu vide de grid par le texte HTML généré
}


renderEventsGrid();                   // Exécute notre fonction



function setupSidebarToggle() {
    console.log("début")
    const toggleButton = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content'); // Pour décaler le contenu
    
    // Écoute l'événement 'click' sur le bouton menu
    toggleButton.addEventListener('click', () => {
        // Bascule la classe 'active' sur la sidebar pour l'afficher/la masquer
        sidebar.classList.toggle('active');
        // Bascule la classe 'sidebar-open' sur le contenu principal pour le décaler
        mainContent.classList.toggle('sidebar-open'); 
    });
    console.log("Fin")
}

setupSidebarToggle();
