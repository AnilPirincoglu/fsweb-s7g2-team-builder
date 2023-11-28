const fakeData = [
	{
		"name": "Yeo Bishop",
		"phone": "(355) 791-2433",
		"email": "proin.ultrices@icloud.edu",
		"address": "9616 Ac Av.",
		"postalZip": "64-68",
		"region": "Guanacaste",
		"country": "South Korea"
	},
	{
		"name": "Vaughan Frost",
		"phone": "(978) 271-7723",
		"email": "pede.et.risus@yahoo.edu",
		"address": "797-7291 Curabitur Rd.",
		"postalZip": "258451",
		"region": "Kharkiv oblast",
		"country": "China"
	},
	{
		"name": "Alika Fernandez",
		"phone": "(927) 221-5326",
		"email": "egestas@icloud.couk",
		"address": "9699 Urna. Road",
		"postalZip": "673431",
		"region": "Umbria",
		"country": "Canada"
	},
	{
		"name": "Orla Herrera",
		"phone": "(985) 774-8221",
		"email": "sem@hotmail.org",
		"address": "864-4740 Curabitur Street",
		"postalZip": "L1N 5J4",
		"region": "North Island",
		"country": "Pakistan"
	},
	{
		"name": "Nayda Gay",
		"phone": "1-941-908-1780",
		"email": "dui.nec@hotmail.couk",
		"address": "Ap #884-8304 Nibh. Road",
		"postalZip": "3953-9395",
		"region": "North Island",
		"country": "Peru"
	},
	{
		"name": "Farrah Walter",
		"phone": "(274) 950-0440",
		"email": "mi.aliquam@yahoo.org",
		"address": "571-5023 Sagittis Av.",
		"postalZip": "34362",
		"region": "Rogaland",
		"country": "Sweden"
	},
	{
		"name": "Shelly Jefferson",
		"phone": "(947) 869-2229",
		"email": "nulla.dignissim@outlook.net",
		"address": "Ap #226-240 Elit St.",
		"postalZip": "115145",
		"region": "Samsun",
		"country": "China"
	},
	{
		"name": "Timothy Delgado",
		"phone": "1-375-586-4172",
		"email": "curabitur.massa.vestibulum@google.couk",
		"address": "Ap #322-1948 Aliquam Avenue",
		"postalZip": "02457",
		"region": "South Australia",
		"country": "Turkey"
	},
	{
		"name": "Destiny West",
		"phone": "1-325-176-9629",
		"email": "non@outlook.net",
		"address": "P.O. Box 950, 6468 Turpis Ave",
		"postalZip": "542583",
		"region": "Valle d'Aosta",
		"country": "South Korea"
	},
	{
		"name": "Yvette Navarro",
		"phone": "(444) 547-5153",
		"email": "fringilla.euismod.enim@yahoo.net",
		"address": "325-3568 Et Avenue",
		"postalZip": "6798",
		"region": "Boyacá",
		"country": "United States"
	},
	{
		"name": "Calvin Lyons",
		"phone": "(833) 407-2248",
		"email": "eget@hotmail.couk",
		"address": "Ap #674-3177 At St.",
		"postalZip": "241197",
		"region": "Punjab",
		"country": "Brazil"
	},
	{
		"name": "Florence Wynn",
		"phone": "1-343-328-7699",
		"email": "eu.ultrices@icloud.org",
		"address": "3834 Volutpat St.",
		"postalZip": "693331",
		"region": "Dōngběi",
		"country": "Colombia"
	},
	{
		"name": "Walter Whitley",
		"phone": "1-136-391-6317",
		"email": "vulputate.ullamcorper@protonmail.org",
		"address": "435-7546 Integer St.",
		"postalZip": "76333",
		"region": "Oslo",
		"country": "Poland"
	},
	{
		"name": "Tara Bond",
		"phone": "(559) 175-9774",
		"email": "congue.turpis.in@outlook.org",
		"address": "Ap #104-7584 Sapien. St.",
		"postalZip": "8926-1704",
		"region": "San José",
		"country": "Canada"
	},
	{
		"name": "Otto Munoz",
		"phone": "1-539-451-7457",
		"email": "ut@google.org",
		"address": "Ap #960-6592 Velit. St.",
		"postalZip": "488932",
		"region": "Marche",
		"country": "New Zealand"
	},
	{
		"name": "Shaine Myers",
		"phone": "(152) 951-2998",
		"email": "tempus.lorem.fringilla@hotmail.com",
		"address": "5437 Ornare, Ave",
		"postalZip": "843214",
		"region": "Delaware",
		"country": "Peru"
	},
	{
		"name": "Xenos Carver",
		"phone": "(531) 825-2555",
		"email": "lectus.rutrum@hotmail.org",
		"address": "Ap #425-8670 Sagittis. Avenue",
		"postalZip": "A9V 5G2",
		"region": "Xīběi",
		"country": "Spain"
	},
	{
		"name": "Quintessa Copeland",
		"phone": "(120) 937-7842",
		"email": "neque@icloud.edu",
		"address": "Ap #528-5533 Luctus, Road",
		"postalZip": "23888-67712",
		"region": "Salzburg",
		"country": "Philippines"
	},
	{
		"name": "Omar Holden",
		"phone": "(866) 857-6225",
		"email": "nisi.mauris.nulla@hotmail.net",
		"address": "136-7375 Mauris. Street",
		"postalZip": "3649",
		"region": "North Region",
		"country": "New Zealand"
	},
	{
		"name": "Hector Warren",
		"phone": "(835) 147-1560",
		"email": "in.scelerisque@aol.couk",
		"address": "784-7710 Fermentum Street",
		"postalZip": "62347",
		"region": "Brussels Hoofdstedelijk Gewest",
		"country": "Ukraine"
	},
	{
		"name": "Reuben Nixon",
		"phone": "(646) 962-5123",
		"email": "est.arcu@aol.com",
		"address": "Ap #884-3682 A, Av.",
		"postalZip": "4167-8999",
		"region": "Gauteng",
		"country": "Ireland"
	},
	{
		"name": "Maia Figueroa",
		"phone": "(386) 684-5849",
		"email": "nonummy.ut@aol.edu",
		"address": "Ap #783-279 In Road",
		"postalZip": "09243",
		"region": "Puglia",
		"country": "France"
	},
	{
		"name": "Aladdin Barron",
		"phone": "1-124-855-6903",
		"email": "et.lacinia@protonmail.couk",
		"address": "P.O. Box 961, 7637 At Ave",
		"postalZip": "631422",
		"region": "Campania",
		"country": "Spain"
	},
	{
		"name": "Emerson Collier",
		"phone": "(573) 774-8540",
		"email": "sem@outlook.org",
		"address": "5396 Eget Rd.",
		"postalZip": "j3S 2N2",
		"region": "North Chungcheong",
		"country": "Colombia"
	},
	{
		"name": "Armando Calhoun",
		"phone": "1-823-355-8782",
		"email": "enim.nec@outlook.com",
		"address": "Ap #229-4088 Elementum Rd.",
		"postalZip": "62415",
		"region": "Xīnán",
		"country": "South Africa"
	}
];

export default fakeData;
