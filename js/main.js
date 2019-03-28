const allFonts = [
    'Roboto', 
    'Cairo', 
    'Germania One', 
    'Open Sans', 
    'Lato', 
    'Amiri', 
    'Montserrat', 
    'Roboto Condensed', 
    'Source Sans Pro', 
    'Oswald', 
    'Raleway', 
    'Lalezar', 
    'Merriweather', 
    'Roboto Slab', 
    'PT Sans', 
    'Noto Sans', 
    'Slabo 27px', 
    'Poppins', 
    'Arimo', 
    'Ubuntu', 
    'Open Sans Condensed', 
    'Changa', 
    'Playfair Display', 
    'PT Serif', 
    'Lora', 
    'ZCOOL XiaoWei', 
    'Roboto Mono', 
    'Muli', 
    'Titillium Web', 
    'Nunito', 
    'Mukta', 
    'Fira Sans', 
    'PT Sans Narrow', 
    'Noto Serif', 
    'Baloo Chettan', 
    'Rubik', 
    'Tajawal', 
    'Work Sans', 
    'Inconsolata', 
    'Nanum Gothic', 
    'Quicksand', 
    'Dosis', 
    'Oxygen', 
    'Hind', 
    'Nunito Sans', 
    'Noto Sans KR', 
    'Libre Barcode 39', 
    'Crimson Text', 
    'Libre Baskerville', 
    'Indie Flower', 
    'Bitter', 
    'Cabin', 
    'Josefin Sans', 
    'Libre Franklin', 
    'Arvo', 
    'Fjalla One', 
    'El Messiri', 
    'Anton', 
    'Karla', 
    'Lobster', 
    'Assistant', 
    'Heebo', 
    'Noto Sans JP', 
    'Varela Round', 
    'Source Code Pro', 
    'Pacifico', 
    'Exo 2', 
    'Merriweather Sans', 
    'Abel', 
    'Dancing Script', 
    'Shadows Into Light', 
    'Abril Fatface', 
    'Yanone Kaffeesatz', 
    'Acme', 
    'Source Serif Pro', 
    'Bree Serif', 
    'Asap', 
    'Hind Siliguri', 
    'Questrial', 
    'Markazi Text', 
    'Archivo Narrow', 
    'Kanit', 
    'Righteous', 
    'EB Garamond', 
    'Ubuntu Condensed', 
    'Amatic SC', 
    'Mrs Sheppards', 
    'Teko', 
    'Exo', 
    'Comfortaa', 
    'Signika', 
    'Play', 
    'Noto Sans TC', 
    'Maven Pro', 
    'Barlow', 
    'Gloria Hallelujah', 
    'Catamaran', 
    'Rajdhani', 
    'Overpass', 
    'Fira Sans Condensed', 
    'Sree Krushnadevaraya', 
    'Vollkorn', 
    'Cinzel', 
    'Crete Round', 
    'Francois One', 
    'Hind Madurai', 
    'Scheherazade', 
    'Domine', 
    'Cantarell', 
    'Permanent Marker', 
    'Rokkitt', 
    'Cuprum', 
    'ABeeZee', 
    'PT Sans Caption', 
    'Satisfy', 
    'Alegreya', 
    'Prompt', 
    'Noticia Text', 
    'Patua One', 
    'Courgette', 
    'News Cycle', 
    'Ropa Sans', 
    'Cardo', 
    'Kaushan Script', 
    'Patrick Hand', 
    'Alegreya Sans', 
    'Kalam', 
    'Cormorant Garamond', 
    'Old Standard TT', 
    'Pathway Gothic One', 
    'Alfa Slab One', 
    'Great Vibes', 
    'Caveat', 
    'Margarine', 
    'Fredoka One', 
    'Lateef', 
    'Fira Sans Extra Condensed', 
    'Orbitron', 
    'Tinos', 
    'IBM Plex Sans', 
    'Barlow Condensed', 
    'Quattrocento Sans', 
    'Cookie', 
    'Luckiest Guy', 
    'Lobster Two', 
    'Didact Gothic', 
    'Quattrocento', 
    'Arapey', 
    'Viga', 
    'Special Elite', 
    'Concert One', 
    'Archivo Black', 
    'Encode Sans Expanded', 
    'Nanum Myeongjo', 
    'Volkhov', 
    'Russo One', 
    'Gothic A1', 
    'Istok Web', 
    'Tangerine', 
    'Chivo', 
    'Passion One', 
    'Martel', 
    'Economica', 
    'Poiret One', 
    'Noto Sans SC', 
    'Monda', 
    'Cabin Condensed', 
    'Reem Kufi', 
    'Sacramento', 
    'BenchNine', 
    'Frank Ruhl Libre', 
    'Playfair Display SC', 
    'Vidaloka', 
    'Gochi Hand', 
    'Josefin Slab', 
    'Khand', 
    'Barlow Semi Condensed', 
    'Merienda', 
    'Gudea', 
    'Hind Guntur', 
    'VT323', 
    'Bangers', 
    'Yrsa', 
    'Neuton', 
    'Handlee', 
    'Pragati Narrow', 
    'Zilla Slab', 
    'Armata', 
    'Paytone One', 
    'Saira Extra Condensed', 
    'M PLUS 1p', 
    'Pontano Sans', 
    'Marck Script', 
    'IBM Plex Serif', 
    'Philosopher', 
    'Hind Vadodara', 
    'Neucha', 
    'Monoton', 
    'Hammersmith One', 
    'Lemonada', 
    'Sanchez', 
    'Signika Negative', 
    'Sawarabi Mincho', 
    'Montserrat Alternates', 
    'Architects Daughter', 
    'Sigmar One', 
    'Ruda', 
    'Caveat Brush', 
    'Italiana', 
    'Audiowide', 
    'Gentium Basic', 
    'Khula', 
    'Prata', 
    'Amaranth', 
    'Playball', 
    'Unica One', 
    'Boogaloo', 
    'Ultra', 
    'Parisienne', 
    'Allerta Stencil', 
    'Molengo', 
    'Varela', 
    'Sorts Mill Goudy', 
    'PT Mono', 
    'Advent Pro', 
    'Enriqueta', 
    'Glegoo', 
    'Bai Jamjuree', 
    'Kreon', 
    'Shadows Into Light Two', 
    'Bad Script', 
    'Yantramanav', 
    'Yellowtail', 
    'Alice', 
    'Cousine', 
    'Adamina', 
    'Mada', 
    'Homemade Apple', 
    'Press Start 2P', 
    'Sintony', 
    'Actor', 
    'Gentium Book Basic', 
    'Rock Salt', 
    'Ubuntu Mono', 
    'Antic Slab', 
    'Sarala', 
    'Covered By Your Grace', 
    'Julius Sans One', 
    'Miss Fajardose', 
    'Carter One', 
    'Coda', 
    'Noto Serif JP', 
    'Jura', 
    'Taviraj', 
    'Cormorant', 
    'Allura', 
    'Lusitana', 
    'Alegreya Sans SC', 
    'Pridi', 
    'Nothing You Could Do', 
    'Damion', 
    'Arbutus Slab', 
    'Encode Sans Condensed', 
    'Saira', 
    'Saira Semi Condensed', 
    'PT Serif Caption', 
    'Rambla', 
    'Karma', 
    'Oleo Script', 
    'Chewy', 
    'Iceberg', 
    'Antic', 
    'Fugaz One', 
    'Archivo', 
    'Baloo Bhaijaan', 
    'Cantata One', 
    'Scada', 
    'Fredericka the Great', 
    'Unna', 
    'Mr Dafoe', 
    'Alex Brush', 
    'Lustria', 
    'Rancho', 
    'Reenie Beanie', 
    'Spinnaker', 
    'Baloo', 
    'Marcellus', 
    'Prosto One', 
    'Nanum Gothic Coding', 
    'Allerta', 
    'Michroma', 
    'Bevan', 
    'Rasa', 
    'Noto Serif SC', 
    'Noto Serif TC', 
    'Nobile', 
    'Basic', 
    'Italianno', 
    'Average', 
    'Syncopate', 
    'Knewave', 
    'Sawarabi Gothic', 
    'Aleo', 
    'Charm', 
    'Just Another Hand', 
    'Candal', 
    'Alef', 
    'Love Ya Like A Sister', 
    'Black Ops One', 
    'Marmelad', 
    'Mirza', 
    'Leckerli One', 
    'Niconne', 
    'Mitr', 
    'Pavanam', 
    'Overlock', 
    'Kameron', 
    'Pinyon Script', 
    'Major Mono Display', 
    'Nanum Pen Script', 
    'Electrolize', 
    'B612', 
    'B612 Mono', 
    'Aldrich', 
    'Biryani', 
    'Coming Soon', 
    'Radley', 
    'Spectral', 
    'Hanuman', 
    'Pangolin', 
    'Sniglet', 
    'ZCOOL QingKe HuangYou', 
    'ZCOOL KuaiLe', 
    'Quantico', 
    'Forum', 
    'Staatliches', 
    'Cabin Sketch', 
    'Bowlby One SC', 
    'Days One', 
    'Grand Hotel', 
    'Lilita One', 
    'Titan One', 
    'Cinzel Decorative', 
    'Telex', 
    'Fauna One', 
    'Abhaya Libre', 
    'Tenor Sans', 
    'Space Mono', 
    'Do Hyeon', 
    'Share Tech Mono', 
    'Magra', 
    'Palanquin', 
    'Harmattan', 
    'Shojumaru', 
    'Oranienbaum', 
    'Rufina', 
    'Bungee Inline', 
    'Rochester', 
    'Share', 
    'Berkshire Swash', 
    'Copse', 
    'Saira Condensed', 
    'Coda Caption', 
    'Carrois Gothic', 
    'Miriam Libre', 
    'Fira Mono', 
    'Itim', 
    'Squada One', 
    'Belleza', 
    'Raleway Dots', 
    'Arsenal', 
    'M PLUS Rounded 1c', 
    'Anonymous Pro', 
    'Petit Formal Script', 
    'Jaldi', 
    'Carme', 
    'Marcellus SC', 
    'Nanum Brush Script', 
    'Norican', 
    'Halant', 
    'Marvel', 
    'Shrikhand', 
    'Encode Sans', 
    'Slabo 13px', 
    'Jockey One', 
    'Gruppo', 
    'Yesteryear', 
    'Aref Ruqaa', 
    'Changa One', 
    'Alegreya SC', 
    'Nixie One', 
    'Martel Sans', 
    'Coustard', 
    'Lekton', 
    'Annie Use Your Telescope', 
    'Delius', 
    'Caudex', 
    'Asap Condensed', 
    'Voltaire', 
    'Aclonica', 
    'Tauri', 
    'Judson', 
    'Cutive Mono', 
    'Racing Sans One', 
    'Rosario', 
    'Metrophobic', 
    'Gilda Display', 
    'Pattaya', 
    'Cambo', 
    'Buenard', 
    'Calligraffitti', 
    'Mukta Malar', 
    'Balthazar', 
    'Laila', 
    'Ceviche One', 
    'Goudy Bookletter 1911', 
    'Yeseva One', 
    'Ovo', 
    'GFS Didot', 
    'Bungee', 
    'Londrina Solid', 
    'Graduate', 
    'Freckle Face', 
    'Scope One', 
    'Kelly Slab', 
    'Contrail One', 
    'Limelight', 
    'Katibeh', 
    'Secular One', 
    'Amethysta', 
    'Give You Glory', 
    'Capriola', 
    'Homenaje', 
    'Herr Von Muellerhoff', 
    'Eczar', 
    'Bubblegum Sans', 
    'Aladin', 
    'Mr De Haviland', 
    'IBM Plex Mono', 
    'Cutive', 
    'Inder', 
    'Arizonia', 
    'Oxygen Mono', 
    'Mukta Vaani', 
    'Trocchi', 
    'Duru Sans', 
    'Suranna', 
    'Doppio One', 
    'Hanalei Fill', 
    'Gabriela', 
    'Trirong', 
    'Suez One', 
    'Average Sans', 
    'Arima Madurai', 
    'Merienda One', 
    'Puritan', 
    'Sarabun', 
    'Sue Ellen Francisco', 
    'Quando', 
    'Sunflower', 
    'Kristi', 
    'Chelsea Market', 
    'Skranji', 
    'Schoolbell', 
    'Mate', 
    'Poly', 
    'Allan', 
    'Baloo Bhaina', 
    'Six Caps', 
    'Rakkas', 
    'Maitree', 
    'Rye', 
    'K2D', 
    'Montez', 
    'Pompiere', 
    'Wendy One', 
    'Palanquin Dark', 
    'Noto Serif KR', 
    'Spicy Rice', 
    'Black Han Sans', 
    'Sriracha', 
    'Faustina', 
    'Happy Monkey', 
    'Lemon', 
    'Federo', 
    'Cedarville Cursive', 
    'Amiko', 
    'Andada', 
    'Qwigley', 
    'IM Fell English', 
    'Bowlby One', 
    'Artifika', 
    'Alike', 
    'Niramit', 
    'Mali', 
    'Krub', 
    'KoHo', 
    'Fahkwang', 
    'Kodchasan', 
    'Convergence', 
    'Short Stack', 
    'Cambay', 
    'IM Fell Double Pica', 
    'Andika', 
    'Averia Serif Libre', 
    'Mouse Memoirs', 
    'Corben', 
    'Emilys Candy', 
    'Chakra Petch', 
    'Bentham', 
    'Faster One', 
    'Gurajada', 
    'Fanwood Text', 
    'Gravitas One', 
    'Megrim', 
    'Athiti', 
    'Jomhuria', 
    'Kosugi Maru', 
    'Cormorant Infant', 
    'Vesper Libre', 
    'Kurale', 
    'Carrois Gothic SC', 
    'Bilbo Swash Caps', 
    'Clicker Script', 
    'La Belle Aurore', 
    'Seaweed Script', 
    'Euphoria Script', 
    'Patrick Hand SC', 
    'Vibur', 
    'Rozha One', 
    'Crafty Girls', 
    'UnifrakturMaguntia', 
    'Anaheim', 
    'Wallpoet', 
    'Baumans', 
    'Expletus Sans', 
    'Oregano', 
    'Podkova', 
    'Thasadith', 
    'Overpass Mono', 
    'Brawler', 
    'Proza Libre', 
    'Mako', 
    'IM Fell DW Pica', 
    'Strait', 
    'Orienta', 
    'Cormorant SC', 
    'Charmonman', 
    'Srisakdi', 
    'Fondamento', 
    'Waiting for the Sunrise', 
    'Gafata', 
    'Unkempt', 
    'Meddon', 
    'Galada', 
    'Sansita', 
    'Rammetto One', 
    'The Girl Next Door', 
    'Mallanna', 
    'Belgrano', 
    'Delius Swash Caps', 
    'Zeyada', 
    'McLaren', 
    'Rouge Script', 
    'Vast Shadow', 
    'Oleo Script Swash Caps', 
    'Kumar One', 
    'IBM Plex Sans Condensed', 
    'Wire One', 
    'Walter Turncoat', 
    'Kadwa', 
    'Loved by the King', 
    'Krona One', 
    'Fjord One', 
    'Eater', 
    'Just Me Again Down Here', 
    'Cantora One', 
    'Stardos Stencil', 
    'Voces', 
    'Salsa', 
    'Sofia', 
    'Cherry Swash', 
    'Imprima', 
    'Denk One', 
    'Ramabhadra', 
    'Lily Script One', 
    'Dawning of a New Day', 
    'Bellefair', 
    'Fontdiner Swanky', 
    'Londrina Outline', 
    'Mrs Saint Delafield', 
    'Amita', 
    'Aguafina Script', 
    'Averia Libre', 
    'Fenix', 
    'Nova Mono', 
    'Bungee Shade', 
    'Medula One', 
    'Iceland', 
    'Over the Rainbow', 
    'Koulen', 
    'Chonburi', 
    'David Libre', 
    'Battambang', 
    'Prociono', 
    'Sarpanch', 
    'Ledger', 
    'Rationale', 
    'Rubik Mono One', 
    'Holtwood One SC', 
    'Finger Paint', 
    'Shanti', 
    'Tienne', 
    'Atma', 
    'Metamorphous', 
    'Mukta Mahee', 
    'Nova Round', 
    'Share Tech', 
    'Timmana', 
    'Codystar', 
    'Geo', 
    'Mogra', 
    'Headland One', 
    'Vampiro One', 
    'Kranky', 
    'Crushed', 
    'Life Savers', 
    'Uncial Antiqua', 
    'BioRhyme Expanded', 
    'Quintessential', 
    'Habibi', 
    'Sumana', 
    'Ranchers', 
    'Nova Square', 
    'Creepster', 
    'Averia Sans Libre', 
    'Tulpen One', 
    'Spectral SC', 
    'Amarante', 
    'Milonga', 
    'Mountains of Christmas', 
    'Spirax', 
    'Dynalight', 
    'Bilbo', 
    'Port Lligat Sans', 
    'Notable', 
    'Engagement', 
    'Baloo Paaji', 
    'Dekko', 
    'Flavors', 
    'IM Fell English SC', 
    'Frijole', 
    'Port Lligat Slab', 
    'Cherry Cream Soda', 
    'Sedgwick Ave', 
    'Mandali', 
    'Englebert', 
    'Encode Sans Semi Condensed', 
    'Bokor', 
    'Lovers Quarrel', 
    'BioRhyme', 
    'Montserrat Subrayada', 
    'Kotta One', 
    'Ruslan Display', 
    'Bubbler One', 
    'Chicle', 
    'Moul', 
    'Dokdo', 
    'Kite One', 
    'NTR', 
    'Slackey', 
    'Elsie', 
    'Stint Ultra Expanded', 
    'Chau Philomene One', 
    'Poller One', 
    'Esteban', 
    'Princess Sofia', 
    'Condiment', 
    'Alike Angular', 
    'Kosugi', 
    'Baloo Bhai', 
    'Antic Didone', 
    'Mate SC', 
    'Simonetta', 
    'Baloo Thambi', 
    'Sail', 
    'Sarina', 
    'Stalemate', 
    'Paprika', 
    'Numans', 
    'Nosifer', 
    'Stint Ultra Condensed', 
    'Peralta', 
    'Dorsa', 
    'Encode Sans Semi Expanded', 
    'Khmer', 
    'Coiny', 
    'Nova Slim', 
    'Nova Flat', 
    'League Script', 
    'Ramaraja', 
    'Asul', 
    'Farsan', 
    'Taprom', 
    'Arya', 
    'Cagliostro', 
    'Averia Gruesa Libre', 
    'Meera Inimai', 
    'Angkor', 
    'Junge', 
    'Baloo Tamma', 
    'Rosarivo', 
    'Almendra', 
    'Pirata One', 
    'Cormorant Upright', 
    'Ruluko', 
    'Donegal One', 
    'Joti One', 
    'Fresca', 
    'Mystery Quest', 
    'Yatra One', 
    'Flamenco', 
    'Wellfleet', 
    'Ribeye', 
    'Chela One', 
    'Stoke', 
    'Delius Unicase', 
    'Gugi', 
    'Miniver', 
    'Sancreek', 
    'Inknut Antiqua', 
    'Galindo', 
    'IM Fell French Canon', 
    'Gaegu', 
    'Linden Hill', 
    'Kavoon', 
    'Overlock SC', 
    'Trade Winds', 
    'Manuale', 
    'Padauk', 
    'Buda', 
    'Swanky and Moo Moo', 
    'Glass Antiqua', 
    'Jim Nightshade', 
    'Petrona', 
    'Maiden Orange', 
    'Jua', 
    'Croissant One', 
    'Nokora', 
    'Sura', 
    'IM Fell DW Pica SC', 
    'Text Me One', 
    'Rhodium Libre', 
    'Poor Story', 
    'Diplomata SC', 
    'Redressed', 
    'Offside', 
    'Fascinate Inline', 
    'Henny Penny', 
    'IM Fell Great Primer', 
    'Autour One', 
    'Sonsie One', 
    'IM Fell French Canon SC', 
    'Julee', 
    'Revalia', 
    'Plaster', 
    'Eagle Lake', 
    'Griffy', 
    'Song Myung', 
    'Mina', 
    'Monsieur La Doulaise', 
    'Marko One', 
    'New Rocker', 
    'Inika', 
    'Della Respira', 
    'Trykker', 
    'UnifrakturCook', 
    'MedievalSharp', 
    'Elsie Swash Caps', 
    'Chango', 
    'Rum Raisin', 
    'Astloch', 
    'Tillana', 
    'Akronim', 
    'Cormorant Unicase', 
    'Oldenburg', 
    'Smythe', 
    'Galdeano', 
    'Miltonian Tattoo', 
    'Underdog', 
    'Monofett', 
    'Ruthie', 
    'Bahiana', 
    'Asset', 
    'Barrio', 
    'Purple Purse', 
    'Chathura', 
    'Montaga', 
    'East Sea Dokdo', 
    'Ranga', 
    'Bigshot One', 
    'Irish Grover', 
    'Snippet', 
    'Modern Antiqua', 
    'Siemreap', 
    'Ravi Prakash', 
    'Felipa', 
    'Baloo Tammudu', 
    'Black And White Picture', 
    'Stylish', 
    'Caesar Dressing', 
    'Kirang Haerang', 
    'Asar', 
    'Gamja Flower', 
    'Cute Font', 
    'Hi Melody', 
    'Yeon Sung', 
    'Snowburst One', 
    'Arbutus', 
    'IM Fell Great Primer SC', 
    'Jacques Francois Shadow', 
    'Molle', 
    'Sahitya', 
    'Dr Sugiyama', 
    'Zilla Slab Highlight', 
    'Ewert', 
    'Original Surfer', 
    'Sirin Stencil', 
    'Lancelot', 
    'Dangrek', 
    'Devonshire', 
    'Odor Mean Chey', 
    'Ruge Boogie', 
    'Kdam Thmor', 
    'Baloo Da', 
    'Metal Mania', 
    'Kavivanar', 
    'Content', 
    'Lakki Reddy', 
    'Jolly Lodger', 
    'Bayon', 
    'Keania One', 
    'Almendra Display', 
    'Ribeye Marrow', 
    'Diplomata', 
    'IM Fell Double Pica SC', 
    'Piedra', 
    'Suwannaphum', 
    'Sunshiney', 
    'Freehand', 
    'Goblin One', 
    'Macondo', 
    'Seymour One', 
    'Kenia', 
    'Atomic Age', 
    'Smokum', 
    'Kantumruy', 
    'Meie Script', 
    'Almendra SC', 
    'Bungee Outline', 
    'Modak', 
    'Jacques Francois', 
    'GFS Neohellenic', 
    'Trochut', 
    'Londrina Shadow', 
    'Combo', 
    'Butterfly Kids', 
    'Nova Script', 
    'Romanesco', 
    'Libre Barcode 128', 
    'Libre Barcode 39 Text', 
    'Vollkorn SC', 
    'Supermercado One', 
    'Metal', 
    'Unlock', 
    'Passero One', 
    'Geostar Fill', 
    'Miltonian', 
    'Libre Barcode 39 Extended Text', 
    'Risque', 
    'Sedgwick Ave Display', 
    'Nova Cut', 
    'Gorditas', 
    'Libre Barcode 39 Extended', 
    'Nova Oval', 
    'Bungee Hairline', 
    'Sofadi One', 
    'Bigelow Rules', 
    'Fruktur', 
    'Fascinate', 
    'Erica One', 
    'Mr Bedfort', 
    'Aubrey', 
    'Tenali Ramakrishna', 
    'Butcherman', 
    'Preahvihear', 
    'Macondo Swash Caps', 
    'Londrina Sketch', 
    'Bonbon', 
    'Geostar', 
    'Libre Barcode 128 Text', 
    'Fasthand', 
    'Sevillana', 
    'Emblema One', 
    'Suravaram', 
    'Federant', 
    'Gidugu', 
    'Stalinist One', 
    'Peddana', 
    'Kumar One Outline', 
    'Chenla', 
    'Hanalei', 
    'Dhurjati', 
    'Moulpali', 
    'Warnes', 
]

const content = document.querySelector("#content")
const fonts = document.querySelector("#fonts")

const controls_selectedFont = document.querySelector(".selected-font")

// Add Fonts
for(let i = 0; i < allFonts.length; i++ ) {
    let li = document.createElement("li")
    li.setAttribute('data-value', allFonts[i])
    li.innerText = allFonts[i]
    li.style.fontFamily = allFonts[i]
    
    li.addEventListener("click", () => {
        content.style.fontFamily = allFonts[i]
        selectedFont(allFonts[i])
    })

    fonts.appendChild(li)
}


// Update Selected Font
function selectedFont(fontName) {
    controls_selectedFont.innerHTML = `Current Font: <strong>${fontName}</strong>`
}


// Init
function init() {
    controls_selectedFont.innerHTML = `Current Font: <strong>Please select a font!</strong>`
}
init()