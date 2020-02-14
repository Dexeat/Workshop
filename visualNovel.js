//Var globales
let ywx = 0;
var sec = 30;
var textOn = {value: 0};
//cette variable sera altérée par les minijeux anoçant la victoire ou la défaite du joueur
var result = {value: 0};
var nbr = {value: 0};
var letter = {value: "b"};//a CHANGER
display_perso(1,"void","void");
display_perso(2,"void","void");
display_perso(3,"void","void");
display_perso(4,"void","void");

document.addEventListener("keydown",realisateur, false)

function realisateur(event){
	
	if (textOn.value == 0) {
		if ((event.keyCode == 32)||(event.keyCode == 13)) {
			switch (letter.value){
				case ("intro"):
					if (nbr.value < 2){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							intro1();
							break;
						case 2:
							intro2();//mise en place pour le bouton jouer
							if (result.value == 1){
								letter.value = "a";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e1");
							}else if (result.value == 2) {
								letter.value = "b";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e1");
							}
							break;
					}
					break;
				case ("a"):
					if (nbr.value < 11){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							a1();
							break;
						case 2:
							a2();
							break;
						case 3:
							a3();
							break;
						case 4:
							a4();
							break;
						case 5:
							a5();
							break;
						case 6:
							a6();
							break;
						case 7:
							a7();
							break;
						case 8:
							a8();
							break;
						case 9:
							a9();
							break;
						case 10:
							a10();
							break;
						case 11:
							a11();
							if (result.value == 1){
								letter.value = "b";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e2");
							}else if (result.value == 2) {
								letter.value = "c";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e2");
							}
							break;
					}
					break;
				case ("b"):
					if (nbr.value < 3){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							b1();
							break;
						case 2:
							b2();
							break;
						case 3:
							b3();
							nbr.value = 0;
							letter.value = "d";
							break;
					}
					break;
				case ("c"):
					if (nbr.value < 3){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							c1();
							break;
						case 2:
							c2();
							break;
						case 3:
							c3();
							nbr.value = 0;
							letter.value = "d";
							break;
					}
				case ("d"):
					if (nbr.value < 23){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							d1();
							break;
						case 2:
							d2();
							break;
						case 3:
							d3();
							break;
						case 4:
							d4();
							break;
						case 5:
							d5();
							break;
						case 6:
							d6();
							break;
						case 7:
							d7();
							break;
						case 8:
							d8();
							break;
						case 9:
							d9();
							break;
						case 10:
							d10();
							break;
						case 11:
							d11();
							break;
						case 12:
							d12();
							break;
						case 13:
							d13();
							break;
						case 14:
							d14();
							break;
						case 15:
							d15();
							break;
						case 16:
							d16();
							break;
						case 17:
							d17();
							break;
						case 18:
							d18();
							break;
						case 19:
							d19();
							break;
						case 20:
							d20();
							break;
						case 21:
							d21();
							break;
						case 22:
							d22();
							break;
						case 23:
							d23();
							if (result.value == 1){
								letter.value = "e";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e3");
							}else if (result.value == 2) {
								letter.value = "f";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e3");
							}
							break;
					}
					break;
				case ("e"):
					if (nbr.value < 10){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							e1();
							break;
						case 2:
							e2();
							break;
						case 3:
							e3();
							break;
						case 4:
							e4();
							break;
						case 5:
							e5();
							break;
						case 6:
							e6();
							break;
						case 7:
							e7();
							break;
						case 8:
							e8();
							break;
						case 9:
							e9();
							break;
						case 10:
							e10();
							if (result.value == 1){
								letter.value = "g";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e4v");
							}else if (result.value == 2) {
								letter.value = "h";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e4v");
							}
							break;
					}
					break;
				case ("f"):
					if (nbr.value < 7){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							f1();
							break;
						case 2:
							f2();
							break;
						case 3:
							f3();
							break;
						case 4:
							f4();
							break;
						case 5:
							f5();
							break;
						case 6:
							f6();
							break;
						case 7:
							f7();
							if (result.value == 1){
								letter.value = "e";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e4d");
							}else if (result.value == 2) {
								letter.value = "f";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e4d");
							}
							break;
					}
					break;
				case ("g"):
					if (nbr.value < 4){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							g1();
							break;
						case 2:
							g2();
							break;
						case 3:
							g3();
							break;
						case 4:
							g4();
							nbr.value = 0;
							letter.value = "k";
							break;
					}
					break;
				case ("h"):
					if (nbr.value < 3){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							h1();
							break;
						case 2:
							h2();
							break;
						case 3:
							h3();
							nbr.value = 0;
							letter.value = "k";
							break;
					}
					break;
				case ("i"):
					if (nbr.value < 2){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							i1();
							break;
						case 2:
							i2();
							nbr.value = 0;
							letter.value = "k";
							break;
					}
					break;
				case ("j"):
					if (nbr.value < 5){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							j1();
							break;
						case 2:
							j2();
							break;
						case 3:
							j3();
							break;
						case 4:
							j4();
							break;
						case 5:
							j5();
							nbr.value = 0;
							letter.value = "k";
							break;
					}
					break;
				case ("k"):
					if (nbr.value < 8){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							k1();
							break;
						case 2:
							k2();
							break;
						case 3:
							k3();
							break;
						case 4:
							k4();
							break;
						case 5:
							k5();
							break;
						case 6:
							k6();
							break;
						case 7:
							k7();
							break;
						case 8:
							k8();
							if (result.value == 1){
								letter.value = "l";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e5");
							}else if (result.value == 2) {
								letter.value = "m";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e5");
							}
							break;
					}
					break;
				case ("l"):
					if (nbr.value < 2){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							l1();
							break;
						case 2:
							l2();
							nbr.value = 0;
							letter.value = "n";
							break;
					}
					break;
				case ("m"):
					if (nbr.value < 9){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							m1();
							break;
						case 2:
							m2();
							break;
						case 3:
							m3();
							break;
						case 4:
							m4();
							break;
						case 5:
							m5();
							break;
						case 6:
							m6();
							break;
						case 7:
							m7();
							break;
						case 8:
							m8();
							break;
						case 9:
							m9();
							nbr.value = 0;
							letter.value = "n";
							break;
					}
					break;
				case ("n"):
					if (nbr.value < 15){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							n1();
							break;
						case 2:
							n2();
							break;
						case 3:
							n3();
							break;
						case 4:
							n4();
							break;
						case 5:
							n5();
							break;
						case 6:
							n6();
							break;
						case 7:
							n7();
							break;
						case 8:
							n8();
							break;
						case 9:
							n9();
							break;
						case 10:
							n10();
							break;
						case 11:
							n11();
							break;
						case 12:
							n12();
							break;
						case 13:
							n13();
							break;
						case 14:
							n14();
							break;
						case 15:
							n15();
							if (result.value == 1){ //result.value n'a pas changé
								letter.value = "o";
								nbr.value = 0;				
							}else if (result.value == 2) {
								letter.value = "p";
								nbr.value = 0;				
							}
							break;
					}
					break;
				case ("o"):
					if (nbr.value < 17){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							o1();
							break;
						case 2:
							o2();
							break;
						case 3:
							o3();
							break;
						case 4:
							o4();
							break;
						case 5:
							o5();
							break;
						case 6:
							o6();
							break;
						case 7:
							o7();
							break;
						case 8:
							o8();
							break;
						case 9:
							o9();
							break;
						case 10:
							o10();
							break;
						case 11:
							o11();
							break;
						case 12:
							o12();
							break;
						case 13:
							o13();
							break;
						case 14:
							o14();
							break;
						case 15:
							o15();
							break;
						case 16:
							o16();
							break;
						case 17:
							o17();
							if (result.value == 1){
								letter.value = "q";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e6v");
							}else if (result.value == 2) {
								letter.value = "s";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e6v");
							}
							break;
					}
					break;
				case ("p"):
					if (nbr.value < 15){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							p1();
							break;
						case 2:
							p2();
							break;
						case 3:
							p3();
							break;
						case 4:
							p4();
							break;
						case 5:
							p5();
							break;
						case 6:
							p6();
							break;
						case 7:
							p7();
							break;
						case 8:
							p8();
							break;
						case 9:
							p9();
							break;
						case 10:
							p10();
							break;
						case 11:
							p11();
							break;
						case 12:
							p12();
							break;
						case 13:
							p13();
							break;
						case 14:
							p14();
							break;
						case 15:
							p15();
							if (result.value == 1){
								letter.value = "r";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e6d");
							}else if (result.value == 2) {
								letter.value = "s";
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e6d");
							}
							break;
					}		
					break;
				case ("q"):
					if (nbr.value < 6){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							q1();
							break;
						case 2:
							q2();
							break;
						case 3:
							q3();
							break;
						case 4:
							q4();
							break;
						case 5:
							q5();
							break;
						case 6:
							q6();
							nbr.value = 0;
							letter.value = "t";
							break;
					}
					break;
				case ("r"):
					if (nbr.value < 6){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							r1();
							break;
						case 2:
							r2();
							break;
						case 3:
							r3();
							break;
						case 4:
							r4();
							break;
						case 5:
							r5();
							break;
						case 6:
							r6();
							nbr.value = 0;
							letter.value = "t";
							break;
					}
					break;
				case ("s"):
					if (nbr.value < 5){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							s1();
							break;
						case 2:
							s2();
							break;
						case 3:
							s3();
							break;
						case 4:
							s4();
							break;
						case 5:
							s5();
							nbr.value = 0;
							letter.value = "t";
							break;
					}
					break;
				case ("t"):
					if (nbr.value < 8){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							t1();
							break;
						case 2:
							t2();
							break;
						case 3:
							t3();
							break;
						case 4:
							t4();
							break;
						case 5:
							t5();
							break;
						case 6:
							t6();
							break;
						case 7:
							t7();
							break;
						case 8:
							t8();
							if (result.value == 1){ //result.value n'a pas changé
								letter.value = "u";
								nbr.value = 0;				
							}else if (result.value == 2) {
								letter.value = "v";
								nbr.value = 0;				
							}
							break;
					}
					break;
				case ("u"):
					if (nbr.value < 2){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							u1();
							break;
						case 2:
							u2();
							if (result.value == 1){
								letter.value = "w";//fin bonne
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e7");
							}else if (result.value == 2) {
								letter.value = "x";//fin mauvaise
								nbr.value = 0;
								$('#button_play').css("display", "none");
								$('#button_play').removeClass("e7");
							}
							break;
					}
					break;
				case ("v"):
					if (nbr.value < 15){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							v1();
							break;
						case 2:
							v2();
							break;
						case 3:
							v3();
							break;
						case 4:
							v4();
							break;
						case 5:
							v5();
							break;
						case 6:
							v6();
							break;
						case 7:
							v7();
							break;
						case 8:
							v8();
							break;
						case 9:
							v9();
							break;
						case 10:
							v10();
							break;
						case 11:
							v11();
							break;
						case 12:
							v12();
							break;
						case 13:
							v13();
							break;
						case 14:
							v14();
							break;
						case 15:
							v15();
							break;
					}
					break;
				case ("w"):
					if (nbr.value < 8){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							v1();
							break;
						case 2:
							v2();
							break;
						case 3:
							v3();
							break;
						case 4:
							v4();
							break;
						case 5:
							v5();
							break;
						case 6:
							v6();
							break;
						case 7:
							v7();
							break;
						case 8:
							v8();
							break;
					}
					break;
				case ("x"):
					if (nbr.value < 9){
						nbr.value++;
					}
					switch (nbr.value){
						case 1:
							v1();
							break;
						case 2:
							v2();
							break;
						case 3:
							v3();
							break;
						case 4:
							v4();
							break;
						case 5:
							v5();
							break;
						case 6:
							v6();
							break;
						case 7:
							v7();
							break;
						case 8:
							v8();
							break;
						case 9:
							v9();
							break;
					}
					break;
			}
		}
	}
}

//texte (accrochez vous)
function intro1(){
	ecrit_text("Vous êtes un jeune héros insouciant assez simplet (on va dire même très simplet). A la recherche d’une aventure particulière, vous errez dans un immense canyon depuis un certain moment, plusieurs chemins s’offrent à vous il semblerait que vous soyez perdu.");
}
function intro2(){
	ecrit_text("");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e1");
}
function a1(){
	$("#background").css({"background-image": "url('assets/background/zone52.jpg')", "background-size": "1000px"});
	ecrit_text("Vous arrivez finalement à sortir de ce labyrinthe. Devant vous apparaît un large complexe de bâtiments entouré d’un vaste grillage lui même installé derrière une série de panneaux. Ce lieu vous fait penser à quelque chose, ça ne serait pas la zone 51 par hasard ?");
}
function a2(){
	ecrit_text("A peine arrivé près du périmètre, un garde vous arrête");
}
function a3(){
	display_perso(1,"billy","idle");
	display_perso(4,"billy","idle");
	parle(1);gris(4);
	ecrit_text("Halte monsieur ! où allez vous comme ça ?");
}
function a4(){
	gris(1);parle(4);
	ecrit_text("Je cherche la zone 51");
}
function a5(){
	gris(4);parle(1);
	ecrit_text("C’est interdit d’accès ici, allez voir à côté")
}
function a6(){
	display_perso(1,"void","void");
	display_perso(4,"void","void");
	ecrit_text("Vous repartez en route, et après quelques kilomètres de marche, vous arrivez devant un grand bâtiment délabré, un grillage éventré entourant son enceinte. Vous pouvez voir un écriteau cassé à l’entrée sur lequel est écrit “Bienvenue dans la zone 52, ici territoire d’accueil pour aventuriers en herbe");
}
function a7(){
	display_perso(4,"billy","idle");
	parle(4);gris(1);
	ecrit_text("Oah, mais super grand le bâtiment, qui a mit ça là ? , bon allez je rentre ça à l’air cool");
}
function a8(){
	display_perso(1,"billy","idle");
	gris(4);parle(1);
	ecrit_text("C’est qui ce guignol qu’on voit dans la caméra ?");
}
function a9(){
	$("#background").css({"background-image": "url('assets/background/labo.jpg')", "background-size": "1000px"});
	display_perso(1,"void","void");
	display_perso(4,"void","void");
	ecrit_text("Vous pénétrez dans le bâtiment, la pièce dans laquelle vous arrivez et remplie de panneaux de commandes composés de voyants lumineux et de boutons de toutes sortes.");
}
function a10(){
	display_perso(4,"billy","idle");
	parle(4);
	ecrit_text("Woaww c’est quoi cette endroit ?? Les autres me croiront jamais, il faut que je prenne un souvenir , tiens je vais prendre ce truc là sur la table.  *Prend un livre sur une table*  Vous vous approchez d’un des panneaux de commandes, lorsque une soudaine envie de toucher à tout fait son apparition.");
}
function a11(){
	ecrit_text("");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e2");
}
function b1(){
	display_perso(1, "antagoniste", "idle");
    display_perso(4, "billy", "idle");
    gris(1);
    parle(4);
    ecrit_text(" Ho mais les boutons sont utilisables ! Je vais essayer d’activer les deux gros");
}
function b2(){
	parle(1);
    gris(4);
    ecrit_text("Non, ne touchez à rien ! Ne bouge plus de là gamin ! Sécurité, envoyez le robot !");
}
function b3(){
	display_perso(1, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("A cet instant, une large trappe que vous n’aviez pas remarqué s’enclenche sous vos pieds. Vous tombez dans une sorte de vortex ; aspiré par cette étrange force, vous serrez le bouquin dans vos bras. Vous n’avez pas vu qu'un petit robot vous avait rejoint dans votre chute.");   
}
function c1(){
	display_perso(1, "antagoniste", "idle");
    display_perso(4, "billy", "idle");
    gris(1);
    parle(4);
    ecrit_text("Rahh mais ça marche pas, bon y’a plus qu’à rentrer");
}
function c2(){
	parle(1);
    gris(4);
    ecrit_text("Il va partir ! Vite sécurité, envoyez le robot!");
}
function c3(){
	//$("#background").css({"background-image": "url('assets/background/zone52.jpg')", "background-size": "1000px"});
	//fond noir
	display_perso(1, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("A cet instant, une large trappe que vous n’aviez pas remarqué s’enclenche sous vos pieds. Vous tombez dans une sorte de vortex ; aspiré par cette étrange force, vous serrez le bouquin dans vos bras. Vous n’avez pas vu qu'un petit robot vous avait rejoint dans votre chute.");
}
function d1(){
	//$("#background").css({"background-image": "url('assets/background/zone52.jpg')", "background-size": "1000px"});
	ecrit_text("Vous arrivez dans monde gelé mais qui vous fait étrangement penser à univers Far West");
}
function d2(){
	display_perso(1, "robot", "gentil");
    display_perso(4, "billy", "idle");
    gris(1);
    parle(4);
    ecrit_text("Mais qu’est ce que je fais là moi, ou suis-je ?");
}
function d3(){
	parle(1);
    gris(4);
    ecrit_text("Te voila dans un beau pétrin");
}
function d4(){
	gris(4);
    parle(4);
    ecrit_text("Qu’est-ce que.. ? C’est qui dans ma tête? ");
}
function d5(){
	parle(1);
    gris(4);
    ecrit_text("Dans ta têt...");
}
function d6(){
	display_perso(4, "billy", "sad");
	gris(1);
    parle(4);
    ecrit_text("Je peux rentrer chez moi ? ");
}
function d7(){
	gris(4);
    parle(1);
    ecrit_text("NON! Tu dois trouver comment t’échapper. Mais ne t’inquiète pas, je vais t’accompagner");
}
function d8(){
	gris(1);
    parle(4);
    ecrit_text("ohhhh d’accord…");
}
function d9(){
	display_perso(4, "billy", "veryhappy");
	ecrit_text("On va où du coup ?");
}
function d10(){
	gris(4);
    parle(1);
    ecrit_text("Commençons à marcher");
}
function d11(){
	display_perso(4, "billy", "idle");
	gris(1);
    parle(4);
    ecrit_text("Okay");
}
function d12(){
	//$("#background").css({"background-image": "url('assets/background/zone52.jpg')", "background-size": "1000px"});
	gris(4);
    parle(1);
    ecrit_text("Nous arrivons dans une ville. Il n’y a pas grand-monde, j’ai l’impression. C’est même carrément abandonné, si regarde il y’a une sorte de shérif la bas ! allons le voir.");
}
function d13(){
	display_perso(1, "sherif", "happy");
    display_perso(3, "robot", "gentil");
    parle(4);
    gris(1);
    gris(3);
    ecrit_text("Bonjour monsieur");
}
function d14(){
	gris(4);
    gris(3);
    parle(1);
    ecrit_text("Bonjour jeune homme, avez vous vu cette chose ? ");
}
function d15(){
	ecrit_text("Le shérif brandit un avis de recherche où un animal en forme de bazooka est dessiné...");
}
function d16(){
	display_perso(4, "billy", "veryhappy");
	parle(4);
    gris(1);
    gris(3);
    ecrit_text("Qu’est ce que c’est ?!");
}
function d17(){
	display_perso(4, "billy", "idle");
	display_perso(1, "sherif", "doubt");
	gris(4);
    gris(3);
    parle(1);
    ecrit_text("Ces énergumènes ont la faculté impressionnante de créer des portails, alors la plupart des gens qui viennent ici ne prennent plus la peine de s’arrêter, tout le monde se barre avec ce genre d’engin, alors je les chasse.");
}
function d18(){
	parle(3);
    gris(1);
    gris(4);
    ecrit_text(" *en parlant tout bas* Intéressant... on pourrait l’utiliser pour rentrer chez nous...");
}
function d19(){
	display_perso(4, "billy", "happy");
	parle(4);
    gris(3);
    gris(4);
    ecrit_text("Ah oui tiens ! J’y avais pas pensé, c’quand même drôlement futé !");
}
function d20(){
	display_perso(4, "billy", "idle");
	parle(3);
    gris(1);
    gris(4);
    ecrit_text("Chut ! pas si fort imbécile, trouvons le truc et barrons nous !");
}
function d21(){
	display_perso(1, "sherif", "happy");
	gris(4);
    gris(3);
    parle(1);
    ecrit_text("Tenez je vous donne les différents éléments pour le trouver, si vous y parvenez dans le temps imparti, vous allez réussir à trouver l’endroit où il se trouve. Sinon ...");
}
function d22(){
	display_perso(1, "shérif", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(4);
    gris(3);
    parle(1);
    ecrit_text("Aide moi a trouver les différentes pièces du bazooka. Clique sur les différentes choses qui te paraissent bizarres ");
    
}
function d23(){
	ecrit_text("");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e3");
}
//E3 victoire
function e1(){
	display_perso(1, "void", "void");
    display_perso(3, "void", "void");
    display_perso(4, "void", "void");
	ecrit_text("Vous arrivez non loin d’une grotte, et apercevez un être étrange qui ressemble au mélange étonnant entre un canon et animal doté d’une certaine intelligence, vous vous approchez de lui pour l’interpeller.");
}
function e2(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(1);
    parle(4);
    ecrit_text("Hého ! Je cherche un machin qui peut créer des portails, il est dans le coin apparemment. Vous ne l’auriez pas vu par hasard ?");
}
function e3(){
	parle(3);
    gris(1);
    gris(4);
    ecrit_text(" * soupir * ");
}
function e4(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("C’est moi que vous cherchez, vous voulez aller où ? ");
}
function e5(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(3);
    gris(1);
    ecrit_text("Je cherche à partir de ce monde et à rentrer chez moi");
}
function e6(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(1);
    gris(3);
    gris(4);
    ecrit_text("Très bien, mais attention: il faut pouvoir m’ utiliser de manière correcte.La précision du portail que je crée dépend aussi de la précision de mon utilisateur, ça n’ est pas aussi simple que vous ne le pensez, croyez moi.Si vous tremblez lors de la mise à feu, le portail risque d’ être un peu instable, bon j’ ai parfois l’ impression que comprendre des trucs c’ est pas trop votre domaine");
}
function e7(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(3);
    gris(1);
    ecrit_text("Un domaine genre l'endroit où on habite ? ");
}
function e8(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(1);
    gris(4);
    ecrit_text("Bon bref, vous voyez les cibles là - bas ? Il vous faudra toucher leur centre le plus de fois possible.Si vous réussissez, il n’ y aura aucun problème pour que j’ active le portail; sinon, je ne serai malheureusement d’ aucune utilité.");
}
function e9(){
	parle(4);
    gris(3);
    gris(1);
    ecrit_text("Euh très bien je vous prends et je vais au stand de tir");
}
function e10(){
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e4v");
}
function f1(){
	display_perso(1, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(1);
    parle(4);
    ecrit_text("Hého ! Je cherche un animal qui peut créer des portails, il est dans le coin apparemment. Vous ne l’auriez pas vu par hasard ? ");
}
function f2(){
    gris(4);
    parle(1);
    ecrit_text(" Il n’y a personne ");
}
function f3(){
    gris(1);
    parle(4);
    ecrit_text("Regarde là-bas! ");
}
function f4(){
    gris(4);
    parle(1);
    ecrit_text(" Ca ne ressemble pas à… ");
}
function f5(){
    gris(1);
    parle(4);
    ecrit_text("Il est en morceaux!");
}
function f6(){
    gris(4);
    parle(1);
    ecrit_text("Récupère les on va essayer de le réparer");
}
function f7(){
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e4d");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
}
function g1(){//E4a victoire
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(1);
    gris(4);
    ecrit_text(" Incroyable, tu as réussi le test de tir");
}
function g2(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text(" Très bien je vous accompagne, de toute façon en tant que canon je suis habitué à travailler avec des boulets ");
}
function g3(){
	parle(4);
    gris(3);
    gris(1);
    ecrit_text("Que dois-je faire désormais ?");
}
function g4(){
    parle(1);
    gris(3);
    gris(4);
    ecrit_text(" Maintenant suivez-moi, il existe un endroit où mon utilisation se fait de manière encore plus efficace, comme cela vous allez arriver plus précisément à l’endroit que vous désirez ");
}
function h1(){//E4a defaite
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(1);
    gris(4);
    ecrit_text(" Aie, tu as raté l’épreuve de tir… Bon, en soi, ce n’est pas vraiment étonnant.");
}
function h2(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text(" Ah put***, je ne fonctionne plus maintenant a cause de toi.");
}
function h3(){
	parle(4);
    gris(3);
    gris(1);
    ecrit_text("C’était trop compliqué pour moi désolé...je te garde quand meme,meme si tu ne marche plus.");
}

function i1(){//E4d victoire
	display_perso(1, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(4);
    parle(1);
    ecrit_text(" Les pièces semblent s'emboîter parfaitement c’est très bien. (Pour une fois)");
}
function i2(){
	gris(1);
    parle(4);
    ecrit_text(" Super merci beaucoup ! On va pouvoir partir d’ici, maison, j'arriiiiive");
}
function j1(){//E4d victoire
	display_perso(1, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(4);
    parle(1);
    ecrit_text("Les pièces commencent à s'emboîter de manière correcte pour que finalement ça.. ressemble à un bazooka monté à l’envers. C’est étrange il me semble qu’il manque quelque chose tu as bien mis le carburateur?");
    
}
function j2(){
	gris(1);
    parle(4);
    ecrit_text(" Bah oui , tu me prend pour qui? *regarde à côté*");
}
function j3(){
	gris(1);
    parle(4);
    ecrit_text("*regarde à côté* A non mince elle est là…");
}
function j4(){
	gris(4);
    parle(1);
    ecrit_text("C’est pas vrai…");
}
function j5(){
	gris(1);
    parle(4);
    ecrit_text("Tant pis le mal est fait, on le garde au cas où même si il est totalement inutilisable en l’état.");
}
function k1(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(1);
    gris(4);
    ecrit_text("Tu ne peux même pas utiliser ton bazooka... tu vas rester dans ce monde étrange tout le reste de ta vie. Je vais une nouvelle fois vous aider... je vais demander à un ami de vous aider. Ne bougez pas SURTOUT pas !");
}
function k2(){
	display_perso(1, "void", "void");
    display_perso(3, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("* Un mage apparaît soudainement des hautes herbes! *");
}
function k3(){
	display_perso(1, "bazooka", "idle");
    display_perso(2, "magicien", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(2);
    gris(1);
    gris(4);
    gris(3);
    ecrit_text("Alors c’est vous?!Mais comment une personne comme vous a réussi à arriver ici??!Bref ne me répondez pas on a pas beaucoup de temps. Je n’ai pas les capacités pour vous envoyer dans votre monde mais je peux vous envoyer dans un autre qui sera plus sûr qu’ici,enfin j'espère.Ecartez vous je vais lancer l’incantation !!");
}
function k4(){
	display_perso(1, "void", "void");
    display_perso(3, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("* Ouverture d'un portail *")
}
function k5(){
	display_perso(1, "bazooka", "idle");
    display_perso(2, "magicien", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(2);
    gris(1);
    gris(4);
    gris(3);
    ecrit_text("Voilà, allez y je ne tiendrai pas longtemps.Par contre faite attention à vous, je vous envoie dans… ");
}
function k6(){
	parle(4);
    gris(1);
    gris(2);
    gris(3);
    ecrit_text("Okay merciiiii.... * Fonce dans le portail ");
}
function k7(){
	display_perso(2, "magicien", "idle");
    display_perso(1, "void", "void");
    display_perso(3, "void", "void");
    display_perso(4, "void", "void");
    parle(2);
    ecrit_text("Un coeur de volcan… ");
}

function k8(){
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e5");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
}
function l1(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(1);
    gris(4);
    ecrit_text(" Bravo tu as réussis ! On va maintenant se téléporter chez nous.");
}
function l2(){
	parle(4);
    gris(1);
    gris(3);
    ecrit_text("C’est assez simple au final pas de quoi s’inquiéter ");
}

function m1(){
	display_perso(1, "bazooka", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(1);
    gris(4);
    ecrit_text(" Bravo ,tu est irrécupérable...tu a fait quoi avec cet engin???  ");
}
function m2(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("MIAOU !");
}
function m3(){
	parle(3);
    gris(1);
    gris(4);
    ecrit_text("Qu’attends tu ?! Utilises ton arme!! Téléportes nous chez nous!");
}
function m4(){
	parle(4);
    gris(1);
    gris(3);
    ecrit_text("Enfin fini toute cette histoire, je commençais à en avoir marre…");
}
function m5(){
	parle(3);
    gris(1);
    gris(4);
    ecrit_text("Pourquoi l’arme se mets a trembler ,à rougir et à surchauffer ce n’est pas normal.");
}
function m6(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("MIAOU !*tire une flasque mauve sur le sol*");
}
function m7(){
	parle(3);
    gris(1);
    gris(4);
    ecrit_text("Attend on ne sait même pas ou ça peut nous mener, est-tu vraiment sûr de vouloir prendre le risque???");
}
function m8(){
	parle(4);
    gris(1);
    gris(3);
    ecrit_text("Absolument je veux rentrer chez moi!");
}
function m9(){
	display_perso(1, "void", "void");
    display_perso(3, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("* Ouverture d'un portail *")
}
function n1(){
	ecrit_text("Sonné par la téléportation, vous ne voyez que un puissant rayon de soleil. Après s'être habitué à la luminosité ambiante il fut déçu de voir que ce n'était toujours pas chez lui.");
}
function n2(){
	display_perso(1, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(1);
    ecrit_text("Qu’est ce que cette endroit?!Pourquoi ca n’a pas marché??Je veux partir, téléporte moi tout de suite!!!");
}
function n3(){
	parle(1);
    gris(4);
    ecrit_text("Calme toi !Je suis coincé avec toi donc on va s’en sortir tout les deux ensemble.");
}
function n4(){
	gris(1);
    parle(4);
    ecrit_text("Promis?");
}
function n5(){
	parle(1);
    gris(4);
    ecrit_text("Oui je ne repartirais pas sans toi, tu peux me croire");
}
function n6(){
	parle(4);
    gris(1);
    ecrit_text("Quelle est cette endroit?Pourquoi ces champignons sont si gigantesques?");
}
function n7(){
	display_perso(1, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(1);
    gris(4);
    ecrit_text("Je ne sais pas mais méfie toi, on ne sait jamais. Re-tire avec ton bazooka fait nous partir d’ici");
}
function n8(){
	parle(4);
    gris(1);
    ecrit_text("J’essaye mais ça ne marche pas, on dirait qu’il a besoin d’une autre recharge ou bien qu'il est cassé ");
}
function n9(){
	parle(1);
    gris(4);
    ecrit_text("Et où allons nous trouver ça ?? ");
}
function n10(){
	parle(4);
    gris(1);
    ecrit_text("Ohh regarde par terre !!Qu’es ce que c’est ? ");
}
function n11(){
	parle(1);
    gris(4);
    ecrit_text("EH OH tu m'écoutes??")
}
function n12(){
	display_perso(1, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("Vous attrapez le champignon, celui-ci semble résister. Vous tirez plus fort puis vous voyez une tête émerger du sol, puis un corps et des jambes. Apparaît devant vous un grand bonhomme coiffé d’un champignon en guise de chapeau.");
}
function n13(){
	display_perso(1, "champignon", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(1);
    ecrit_text("Ohh nobles voyageurs merci de m’avoir sorti de ma tourmente!!");
}
function n14(){
	parle(4);
    gris(1);
    ecrit_text("AAAAH ! Un champignon qui parle ?!");
}
function n15(){
	parle(4);
    gris(1);
    ecrit_text("Bien-sûr ! Vous êtes à la champiflammière, un lieu magique où nous y habitons. J'ai maintenant une dette envers vous.");
}
function o1(){
	display_perso(1, "champignon", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(4);
    gris(1);
    ecrit_text("Effectivement, nous avons besoin de savoir ou trouver une recharge pour notre bazooka.");
}
function o2(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("Je ne peux pas vous aider,du moins le mieux que je puisse faire c’est vous emmener à la prochaine ville vous trouverez forcément votre recharge.");
}
function o3(){
	parle(4);
    gris(1);
    gris(3);
    ecrit_text("Très bien ,on vous suit alors.");
}
function o4(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("En espérant qu’on ai de la chance.")
}
function o5(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("C’est parti !");
}
function o6(){
	//background ville champi
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("Alors ou est-il ce meccano de génie??");
}
function o7(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("Juste un peu plus loin devant.");
}
function o8(){
	display_perso(1, "réparateur", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(1);
    gris(4);
    gris(3);
    ecrit_text("Bonjour, voyageurs que puis-je faire pour vous? ");
}
function o9(){
	display_perso(1, "réparateur", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(3);
    gris(1);
    ecrit_text("Il nous faut une batterie !");
}
function o10(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("Ce que mon collègue essaye (habilement) de vous dire c’est qu’on désire une recharge pour notre bazooka. ");
}
function o11(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Je vais voir ce que je peux faire...Humm ca va être compliqué ce n'est pas une simple batterie je vais voir...");
}
function o12(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("On en a besoin absolument besoin");
}
function o13(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("C’est possible mais dangereux et compliqué si vous faites un mauvais mouvement s’en ai fini de votre bazooka.");
}
function o14(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("OK, dis nous ce qu’on doit faire");
}
function o15(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Je vous explique.");
}
function o16(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Vous voyez cette boîte ? Elle contient ce dont vous avez besoins mais impossible pour moi de l'ouvrir... Si Vous faites trop de mouvements, la boîte risque d'exploser !");
}
function o17(){
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e6v");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
}
function p1(){
	display_perso(1, "champignon", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(4);
    gris(1);
    ecrit_text("Effectivement, nous avons besoin de savoir comment réparer notre bazooka");
}
function p2(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("Je ne le connais pas personnellement mais il y a un reparateur qui se trouve dans la ville la plus proche.");
}
function p3(){
	parle(4);
    gris(1);
    gris(3);
    ecrit_text("Très bien ,on vous suit alors.");
}
function p4(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("En espérant qu’on ai de la chance");
}
function p5(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("C’est parti !");
}
function p6(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("Alors ou est-il ce meccano de génie??");
}
function p7(){
	parle(1);
    gris(3);
    gris(4);
    ecrit_text("Juste un peu plus loin devant.");
}
function p8(){
	display_perso(1, "réparateur", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Bonjour, voyageurs que puis-je faire pour vous? ");
}
function p9(){
	parle(4);
    gris(3);
    gris(1);
    ecrit_text("Faut nous réparer le bazooka.");
}
function p10(){
	display_perso(1, "réparateur", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    parle(3);
    gris(4);
    gris(1);
    ecrit_text("Ce que mon collègue essaye (habilement) de vous demander c’est est-ce qu’il est possible pour vous de réparer notre équipement?");
}
function p11(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Je vais voir ce que je peux faire...Humm ca va être compliqué.");
}	
function p12(){
	parle(3);
    gris(4);
    gris(1);
    ecrit_text("OK, dis nous ce qu’on doit faire");
}
function p13(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Je vous explique..");
}
function p14(){
	parle(1);
    gris(4);
    gris(3);
    ecrit_text("Il faut que vous réussissiez à revisser votre machin, mais attention, si vous faite trop de trous, ça sera irréparable !");
}
function p15(){
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e6d");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
}
function q1(){//6v v
	display_perso(1, "réparateur", "idle");
    display_perso(2, "champignon", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("Bravo, vous avez parfaitement bien travaillé. Voilà pour vous votre bazooka comme neuf.");
}
function q2(){
	gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("Super on va pouvoir repartir chez nous!!");
}
function q3(){
	gris(4);
    parle(3);
    gris(1);
    gris(2);
    ecrit_text("Oui enfin si ça marche. Merci de nous aider. Allez gogole active le portail.");
}
function q4(){
	gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("Avec plaisir,faite attention à vous.");
}
function q5(){
	gris(4);
    parle(2);
    gris(3);
    gris(1);
    ecrit_text("Merci encore à vous de m’avoir sauvé");
}
function q6(){
	gris(1);
    parle(4);
    gris(3);
    gris(2);
    ecrit_text("A bientot les copains");
}
function r1(){//6d v
	display_perso(1, "réparateur", "idle");
    display_perso(2, "champignon", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("Bravo, vous avez parfaitement bien travaillé. Voilà pour vous votre bazooka comme neuf.");
}
function r2(){
	gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("Super on va pouvoir repartir chez nous!!");
}
function r3(){
	gris(4);
        parle(3);
        gris(1);
        gris(2);
        ecrit_text("Oui enfin si ça marche. Merci de nous aider. Allez gogole active le portail.");
}
function r4(){
	gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("Avec plaisir,faite attention à vous.");
}
function r5(){
	gris(4);
    parle(2);
    gris(3);
    gris(1);
    ecrit_text("Merci encore à vous de m’avoir sauvé");
}
function r6(){
	gris(1);
    parle(4);
    gris(3);
    gris(2);
    ecrit_text("A bientot les copains");
}
function s1(){//6 d
	display_perso(1, "réparateur", "idle");
    display_perso(2, "champignon", "idle");
    display_perso(3, "robot", "idle");
    display_perso(4, "billy", "idle");
    gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text(" Oulaah, mais c’est quoi ce travail d’amateur ?!");
}
function s2(){
	gris(4);
    parle(1);
    gris(3);
    gris(2);
    ecrit_text("ça fera parfaitement l’affaire, aller, RETOUR MAISON ! *Point le bazooka par terre* ");
}
function s3(){
	gris(4);
    parle(2);
    gris(1);
    gris(3);
    ecrit_text("Tu es sûr que c’est une bonne idée ? ");
}
function s4(){
	display_perso(1, "void", "void");
    display_perso(2, "void", "void");
    display_perso(3, "void", "void");
    display_perso(4, "void", "void");
    ecrit_text("*Tire et disparait dans un éclair*");
}
function s5(){
	display_perso(1, "réparateur", "idle");
    parle(1);
    ecrit_text("Bon bah c’ est plus mon problème");
}
function t1(){
	display_perso(1, "mechant", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(1);
    ecrit_text("Hein ? Mais.. brrr.. Où suis-je ?");
}
function t2(){
	gris(4);
    parle(1);
    ecrit_text("Et bien et bien.. Qu’avons-nous là ? Notre cher cobaye est revenu à la maison ");
}
function t3(){
	parle(4);
    gris(1);
    ecrit_text("Un cobaye ?  où ? Je vois pas de rat ?! hein ?! T’es qui ? ");
}
function t4(){
	parle(1);
    gris(4);
    ecrit_text("Je suis le chef de la zone 52, tu m’as dérobé quelque chose qui m’appartient !");
}
function t5(){
	parle(4);
    gris(1);
    ecrit_text("Des robes ? J’ai pas ça moi.");
}
function t6(){
	parle(1);
    gris(4);
    ecrit_text("Non, dérobé du verb.. Bon.. TU M’AS PRIS QUELQUE CHOSE, RENDS LE MOI !");
}
function t7(){
	parle(4);
    gris(1);
    ecrit_text("uh ? ça ?");
}
function t8(){
	gris(1);
    gris(4);
    ecrit_text("Cherche dans ses poches, puis montre le livre.");
}
function u1(){
	display_perso(1, "mechant", "idle");
    display_perso(3, "bazooka", "idle")
    display_perso(4, "billy", "idle");
    parle(1);
    gris(3);
    gris(4);
    ecrit_text("Viens le chercher !");
}
function u2(){
	$('#button_play').css("display", "block");
	$('#button_play').addClass("e7");
	display_perso(1,"void","void");
	display_perso(2,"void","void");
	display_perso(3,"void","void");
	display_perso(4,"void","void");
}
function v1(){
	display_perso(1, "mechant", "idle");
    display_perso(4, "billy", "idle");
    parle(1);
    gris(4);
    ecrit_text("Oui, ça ! Si tu me le donne gentillement, tout se passera bien pour toi.");
}
function v2(){
	gris(1);
    parle(4);
    ecrit_text("C’est à moi ! Donner c’est donner, repeindre ses volets !");
}
function v3(){
	parle(1);
    gris(4);
    ecrit_text("Mais c’est toi que  je vais repeindre oui ! Et puis.. ou tu le donne ou je te tue !");
}
function v4(){
	parle(4);
    gris(1);
    ecrit_text("Oh ouais non mais si les gens trichent aussi..");
}
function v5(){
	parle(1);
    gris(4);
    ecrit_text("Ooh Oh, le petit ne se révolte même pas ? Bon fini de jouer ! GAAAAAAAAAAARDES!");
}
function v6(){
	display_perso(1, "mechant", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(1);
    ecrit_text("C'est terminé maintenant ?");
}
function v7(){
	gris(4);
    parle(1);
    ecrit_text("Oui enfin, bon rends moi le bouquin maintenant.");
}
function v8(){
	parle(4);
    gris(1);
    ecrit_text("Attends mais t'as la meme voix que la voix dans ma tête.");
}
function v9(){
	gris(4);
    parle(1);
    ecrit_text("Idiot, il n'y a jamais eu de voix dans ta tete, c'etait mon robot et je t'ais guidé pour récupérer mon bouquin.");
}
function v10(){
	gris(1);
    gris(4);
    ecrit_text("Le robot retourne sur son épaule.");
}
function v11(){
	parle(4);
    gris(1);
    ecrit_text("Aah mais mais, je croyais qu'on était pote, mon pote.");
}
function v12(){
	parle(1);
    gris(4);
    ecrit_text("Je suis pas ton pote, mon gars, bon maintenant tire toi avant que j'appelle le reste de la sécurité.");
}
function v13(){
	parle(4);
    gris(1);
    ecrit_text("Mais pourquoi tout ceci, pour ce simple bouquin ?");
}
function v14(){
	parle(1);
    gris(4);
    ecrit_text("C'est le livre de recette de ma grand-mère, je voulais pas me faire tuer.");
}
function v15(){
	parle(1);
    gris(4);
    ecrit_text("Rentres chez toi gamin maintenant.");
}
function w1(){
	display_perso(1, "mechant", "idle");
    display_perso(4, "billy", "idle");
    gris(1);
    parle(4);
    ecrit_text("Que m’arrive-t-il ? j’ai mal au crâne, je me sens tout bizarre.");
}
function w2(){
	parle(1);
    gris(4);
    ecrit_text("Tu me surprends je dois l’avouer, tu as passé pas mal d’épreuves avec brio.");
}
function w3(){
	parle(4);
    gris(1);
    ecrit_text("Aie je sens qu’il y a comme une porte qui s’est ouverte dans mon esprit, je commence à penser à plein de choses, à… réfléchir.");
}
function w4(){
	gris(1);
    gris(4);
    ecrit_text("Le robot retourne sur son épaule.");
}
function w5(){
	parle(1);
    gris(4);
    ecrit_text("Hum intéressant, tu as peut-être beaucoup évolué au cours de ton voyage, mais en tout cas tu m’as beaucoup diverti et j’aimerais bien reprendre mon bouquin.");
}
function w6(){
	parle(4);
    gris(1);
    ecrit_text("Depuis le début c’était vous le robot, ah j’aurais du m’en douter ! Tenez voila le livre, je vous le rends.");
}
function w7(){
	parle(1);
    gris(4);
    ecrit_text("Oh tu sais ce n’est que le cahier de recette de ma grand-mère, comme tu m’as beaucoup intrigué et amusé tu peux le garder, et puis de toute façon les plats qu’elle me mijote sont moisis.");
}
function w8(){
	parle(4);
    gris(1);
    ecrit_text("Super ! Je me suis beaucoup amusé aussi, j’ai l’impression d’être devenu un nouvel homme, je me sens encore tout drôle ");	
}
function x1(){
	display_perso(1, "mechant", "idle");
    display_perso(4, "billy", "idle");
    parle(4);
    gris(1);
    ecrit_text("C'est terminé maintenant ? ");
}
function x2(){
	parle(1);
    gris(4);
    ecrit_text("C'est pas toi qui décide, c'est que le début.");
}
function x3(){
	parle(4);
    gris(1);
    ecrit_text("Hein, mais non je pars, c'est crêpe ce soir à la maison.");
}
function x4(){
	parle(1);
    gris(4);
    ecrit_text("Tu pars pas mon petit, pas ce soir.");
}
function x5(){
	gris(1);
    gris(4);
    ecrit_text("Le robot retourne sur son épaule.");
}
function x6(){
	parle(4);
    gris(1);
    ecrit_text("Donc c'était vous depuis le début qui me parlais ?? J'ai pas de voix dans ma tête ? .");
}
function x7(){
	parle(1);
    gris(4);
    ecrit_text("Je m'amusais un peu avec toi, en plus il me fallais que me rendre mon bouquin, c'est le cahier de recette de ma grand-mère.");
}
function x8(){
	parle(4);
    gris(1);
    ecrit_text("Donc je me baladais dans un monde parallèle au péril de ma vie tout ça pour ça?");
}
function x9(){
	parle(1);
    gris(4);
    ecrit_text("Oui, maintenant tu es mon esclave.");
}

//ALEA
function getRandomIntInclusive(min, max) {
  	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

$('main').on('click','#button_play.e1',function(){
	$('#element1_img').addClass('e1');
	$('#element2_img').addClass('e1');
	$('#button_play').removeClass('e1');

	let l_score = 0;
	$('#pop').css("background-color","red")
	ecrit_text_popup("un labyrinthe ?");
	$("#container_pop").css("visibility","visible")
	$('#element1_img').css({'position': 'absolute','top': '200px','left': '720px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheD.png");
	$('#element2_img').css({'position': 'absolute','top': '200px','height': '60px','width': '60px;','visibility': 'visible','display': 'block'}).attr("src","assets/symbole/flecheG.png");
	$("body").on('click','#element2_img.e1',function(){
		switch(l_score){
			case 0 :
				ecrit_text_popup("a gauche ? pourquoi pas...\n maintenant je vais à droite?");
				l_score = 1;
				break;
			case 1:
				ecrit_text_popup("mince c'était encore a gauche maintenant j'essaye à droite!")
				l_score = 2;
				break;
			case 2:
				ecrit_text_popup("Mais ? je suis stupide où quoi ?")
				l_score = 2;
				break;
			case 3:
				ecrit_text_popup("Hummm c'était tout droit cette fois ci")
				l_score = 4;
				break;
			case 4:
				ecrit_text_popup("J'ai comme une impression de déjà vu, je serait pas retourné au départ ?")
				l_score =0;
				break;
			case 5:
				ecrit_text_popup("Tiens ?! un trou ?")
				l_score = 8;
				break;
			case 6:
				ecrit_text_popup("Oui ! je croit que j'ai réussi à avancer !")
				l_score = 7;
				break;
			case 7:
				ecrit_text_popup("La sortie ! ah non on dirait le début")
				l_score = 0;
				break;
			case 8:
				ecrit_text_popup("oh un trou est immense!")
				l_score = 9;
				break;
			case 9:
				ecrit_text_popup("Tiens un morceau de papier ? La recette de la raclette ?!")
				l_score = 10;
				break;
			case 10:
				//$('.e1').css('visibility','hidden')
				$("#element1").css('display','none');
				$("#element2").css('display','none');
				$('#element1_img').removeClass('e1');
				$('#element2_img').removeClass('e1');
				ecrit_text_popup("Un grand batiment... ça doit être ça !");
				setTimeout(end,2000);
					function end(){
					$('#pop').css("display","none");
					clear_minigame();
					result.value = 1;
				}
				break;
		}
	})
	$("body").on('click','#element1_img.e1',function(){
		switch(l_score){
			case 0 :
				ecrit_text_popup("ce n'était pas a droite dommage");
				l_score = 0;
				break;
			case 1:
				ecrit_text_popup("Oups, me re voilà au départ !");
				l_score = 0;
				break;
			case 2 :
				ecrit_text_popup("Cette fois j'avais raison !");
				l_score = 3;
				break;
			case 3:
				ecrit_text_popup("Hummm c'était tout droit cette fois ci");
				l_score = 4;
				break;
			case 4:
				ecrit_text_popup("Bien jouer ! mais maintenant ? je vais à gauche ou à droite ?");
				l_score = 5;
				break;
			case 5:
				ecrit_text_popup("je serai pas en train de tourné en rond ?");
				l_score = 5;
				break;
			case 6:
				ecrit_text_popup("Il n'y a rien de particulier ici je vais essayer à gauche");
				l_score = 7;
				break;
			case 7:
				ecrit_text_popup("Mmmmm je suis sur de moi ?");
				l_score = 8;
				break;
			case 8:
				ecrit_text_popup("Je pense que j\'y sera encore demain, non ? qui a fait ce foutu desert ?");
				l_score = 6;
				break;
			case 9:
				ecrit_text_popup("Bien j'avance pour le moment");
				l_score =10;
				break;
			case 10:
				//$('.e1').css('visibility','hidden')
				$("#element1").css('display','none');
				$("#element2").css('display','none');
				$('#element1_img').removeClass('e1');
				$('#element2_img').removeClass('e1');
				ecrit_text_popup("Tiens ? Un batiment");
				setTimeout(end,2000);
					function end(){
					$('#pop').css("display","none");
					clear_minigame();
					result.value = 1;
				}
				break;
		}
	})

})
$('main').on('click','#button_play.e2',function(){
	let vie = 2;
	let game_end = 0;
	$('.popup').css("background-image", 'url(assets/symbole/tableau1.jpg)');
	$("#element1").css({'height':'70px','width':'550px','position':'absolute','top':'95px','left':'150px','padding':'8px','color':'yellow'});
	$('#element3').css({'height':'500px','width':'100px','position':'absolute','top':'25px','left':'520px'});
	$("#element4").css({'height':'100px','width':'100px','position':'absolute','top':'300px','left':'120px'});
	$('#element4_img').css({ 'height': '65px', 'width': '65px', 'position': 'absolute', 'top': '-65px', 'left': '-5px' }).attr("src","assets/symbole/bouton_orange.png");
	$('#element2').css({'height': '400px', 'width': '550px', 'position': 'absolute', 'top': '160px', 'left': '120px'});
	$('#element5').css({'height':'65px','width':'65px','position':'absolute','top':'235px','left':'400px'});
	
	$("#element1").addClass("e1");
	$('#element3').addClass("e1");
	$("#element4").addClass("e1");
	$('#element4_img').addClass("e1");
	$('#element2').addClass("e1");
	$('#element5').addClass("e1");

	$('#element4_img.e1').draggable();
	$('#element5.e1').droppable({drop: function(event,ui){
		game_end = 1;
		$('#element4_img.e1').css({'top':'-65px','left':'282px'});
	}})
	$("#element1.e1").html("VIE RESTANTE : "+vie);

	// si temps faire animation levier drag and drop ou flip

	$(".popup").on('click','#element3.e1',function(){
		if(game_end == 0){
			vie = vie - 1;
			if(vie == 0){
				$("#element1").removeClass("e1");
				$('#element3').removeClass("e1");
				$("#element4").removeClass("e1");
				$('#element4_img').removeClass("e1");
				$('#element2').removeClass("e1");
				$('#element5').removeClass("e1");
				$('#pop').css("display","none");
				clear_minigame();
				result.value = 2;
			}
			$("#element1.e1").html("VIE RESTANTE : "+vie)
		} else if(game_end == 1){
			$("#element1").removeClass("e1");
			$('#element3').removeClass("e1");
			$("#element4").removeClass("e1");
			$('#element4_img').removeClass("e1");
			$('#element2').removeClass("e1");
			$('#element5').removeClass("e1");
			$('#pop').css("display","none");
			clear_minigame();
			result.value = 1;
		}
	})
})
$('main').on('click','#button_play.e3',function(){
	var nb = 10;
	$('.popup').css("background-image", "url(assets/background/grotte.jpg)");
	$('#element1').css({'height':'50px','width':'80px','position':'absolute','top':'39px','left':'60px'}).addClass("e3");
	$('#element2').css({'height':'80px','width':'30px','position':'absolute','top':'60px','left':'710px'}).addClass("e3");
	$('#element3').css({'height':'80px','width':'150px','position':'absolute','top':'230px','left':'170px'}).addClass("e3");
	$('#element4').css({'height':'40px','width':'200px','position':'absolute','top':'520px','left':'50px'}).addClass("e3");
	$('#element5').css({'height':'60px','width':'80px','position':'absolute','top':'370px','left':'680px'}).addClass("e3");
	$('#element6').css({'height':'40px','width':'30px','position':'absolute','top':'390px','left':'90px'}).addClass("e3");
	$('#element7').css({'height':'80px','width':'250px','position':'absolute','top':'235px','left':'460px'}).addClass("e3");
	$('#element8').css({'height': '40px', 'width':'200px','position':'absolute','top':'500px','left':'430px'}).addClass("e3");
	$('#element9').css({'height':'60px','width':'40px','position':'absolute','top':'360px','left':'345px'}).addClass("e3");
	$('#element10').css({'height':'100px','width':'80px','position':'absolute','top':'470px','left':'670px'}).addClass("e3");

	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px","visibility":"visible"});
	$("#text_pop").css({"margin": "8px", "font-size": "30px"});

	$('.e3').on('click',function(){
		$(this).css("visivility","hidden");
		$(this).removeClass("e3");
		nb --;
		if(nb == 0){
			$('#pop').css("display","none");
			clear_minigame();
			result.value = 1;
		}
	})

	var timer = window.setInterval(function(){
		sec --;
		$("#text_pop").html(sec);
		if(sec == -1){
			$('#pop').css("display","none");
			for (i = 1; i <= 10; i++) {
				$('#element'+i).removeClass("e3");
			}
			clear_minigame();
			window.clearInterval(timer);
			result.value = 2;
		}
	},1000)
})
$('main').on('click','#button_play.e4v',function(){
	$('.popup').css("background-color", "mediumorchid");
	//fond jauge
	$("#element1").css({"height": "100px", "width": "550px", "left": "125px", "top": "250px", "background-color": "blue", "position": "absolute"});
	//jauge
	$("#element2").css({"height": "80px", "width": "530px", "left": "135px", "top": "260px", "background-color": "white", "position": "absolute"});
	//objectif
	$("#element3").css({"width": "105px", "height": "80px", "font-size": "40px", "top": "260px", "left": "349px", "position": "absolute", "background-color": "red"});
	//curseur
	$("#element4").css({"height": "80px", "width": "20px", "left": "235px", "top": "260px", "background-color": "black", "position": "absolute", "transition": "0.01s"});
	//text
	$("#element5").css({"width": "600px", "font-size": "40px", "top": "450px", "left": "150px", "position": "absolute"});
	$("#element5").html("Appuyez sur la barre Espace pour atteidre le centre ! Réussissez 3 essais sur 5 pour remporter la victoire !");


	var x = 235;
	var y = 1;
	var percent = 0;
	var end = {value: 5};
	var won = {value: 0};
	var test = 0;
	var timer = window.setInterval(function(){
		inTimer();		
	},10)
	function inTimer(){
		x += 15 * y;
		$("#element4").css("left",x + "px");
		if (x >= 645){
			y = -1;
		}
		if (x <= 135){
			y = 1;
		}
	}
	document.addEventListener("keydown",keyDownHandler, false)

	function keyDownHandler(event) {
		if (test == 0){
			if(event.keyCode == 32) {
				window.clearInterval(timer);
				percent = (10/51)*x-(450/17);
				if ((percent >= 40) && (percent <= 60)){
					won.value += 1;
				}
				test = 1;
				end.value -= 1;
				if ((end.value == 0)||(won.value == 3)){
					if (won.value == 3){
						$("#element5").html("C'est gagné !");
					}else{
						$("#element5").html("C'est perdu !");
					}
				}
			}
		}else{
			if ((end.value == 0)||(won.value == 3)){
				$('#pop').css("display","none");
				clear_minigame();
				clearInterval(time);
				if (end.value = 0){
					result.value = 2;
				}else if (won.value == 3){
					result.value = 1;
				}
			}else{
				timer = window.setInterval(function(){
					inTimer();
				},10);
				test = 0;
			}
		}
	}
})
$('main').on('click','#button_play.e4d',function(){

	$('.popup').css("background-color", "mediumorchid");
	$("#text_pop").css({"margin": "8px", "font-size": "30px", "display": "block"});
	$("#text_pop").html("6");
	$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px"});
	var carte = {"background-color" : "white", "display" : "block", "width" : "100px", "height" : "150px", "position" : "absolute", "transition": "0.5s"};
	$("#element10").css(carte).addClass("e4d");
	$("#element10").css({"left": "200px", "top": "50px"});
	$("#element2").css(carte).addClass("e4d");
	$("#element2").css({"left": "350px", "top": "50px"});
	$("#element3").css(carte).addClass("e4d");
	$("#element3").css({"left": "500px", "top": "50px"});
	$("#element4").css(carte).addClass("e4d");
	$("#element4").css({"left": "200px", "top": "225px"});
	$("#element5").css(carte).addClass("e4d");
	$("#element5").css({"left": "350px", "top": "225px"});
	$("#element6").css(carte).addClass("e4d");
	$("#element6").css({"left": "500px", "top": "225px"});
	$("#element7").css(carte).addClass("e4d");
	$("#element7").css({"left": "200px", "top": "400px"});
	$("#element8").css(carte).addClass("e4d");
	$("#element8").css({"left": "350px", "top": "400px"});
	$("#element9").css(carte).addClass("e4d");
	$("#element9").css({"left": "500px", "top": "400px"});

	$("#element1").css({"background-color": "green","position": "absolute", "left": "150px", "top": "25px", "width": "500px", "height": "550px"});

	var test = [0,0];
	var end = 6;
	var win = 0;
	var lock = {value: 0};
	var count = {value: 0};
	var carte1 = 1, carte2 = 4, carte3 = 0, carte4 = 1, carte5 = 2, carte6 = 4, carte7 = 3, carte8 = 3, carte9 = 2;
	$(".e4d").click(function(){
		if (lock.value == 0){
			switch (this.id){
				case ("element10") :
					$("#"+this.id).css("background-color","black");
					if (count.value == 0){
						test[0] = carte1;
						count.value = 1;
					}else{
						test[1] = carte1;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element2") :
					$("#"+this.id).css("background-color","red");
					if (count.value == 0){
						test[0] = carte2;
						count.value = 1;
					}else{
						test[1] = carte2;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element3") :
					$("#"+this.id).css("background-color","blue");
					if (count.value == 0){
						test[0] = carte3;
						count.value = 1;
					}else{
						test[1] = carte3;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element4") :
					$("#"+this.id).css("background-color","black");
					if (count.value == 0){
						test[0] = carte4;
						count.value = 1;
					}else{
						test[1] = carte4;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element5") :
					$("#"+this.id).css("background-color","purple");
					if (count.value == 0){
						test[0] = carte5;
						count.value = 1;
					}else{
						test[1] = carte5;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element6") :
					$("#"+this.id).css("background-color","red");
					if (count.value == 0){
						test[0] = carte6;
						count.value = 1;
					}else{
						test[1] = carte6;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element7") :
					$("#"+this.id).css("background-color","lime");
					if (count.value == 0){
						test[0] = carte7;
						count.value = 1;
					}else{
						test[1] = carte7;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;	
				case ("element8") :
					$("#"+this.id).css("background-color","lime");
					if (count.value == 0){
						test[0] = carte8;
						count.value = 1;
					}else{
						test[1] = carte8;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
				case ("element9") :
					$("#"+this.id).css("background-color","purple");
					if (count.value == 0){
						test[0] = carte9;
						count.value = 1;
					}else{
						test[1] = carte9;
						testCount(test[0],test[1]);
						count.value = 0;
					}
					break;
			}
		}
		if (end == 0){
			stoptime = setTimeout(function(){
				$('#pop').css("display","none");
				clear_minigame();
				result.value = 2;
			},1500)
		}else if (win == 4){
			stoptime = setTimeout(function(){
				$('#pop').css("display","none");
				clear_minigame();
				result.value = 1;
			},1500)
		}
	})
	function testCount(a,b){
		if (a == b){
			win += 1;
		}else{
			end -= 1;
			win = 0;
			$("#text_pop").html(end);
			lock.value = 1;
			time = setInterval(function(){
				for (var i = 2; i <= 10; i++) {
					$("#element"+i).css("background-color","white");
				}
				lock.value = 0;
				window.clearInterval(time);
			},500)
		}
	}
})
$('main').on('click','#button_play.e5',function(){
	var error = 10;
	var champi = 'champignon';
	var i=0;
	$('input').css({"visibility":"visible",'height':'30px','width':'100px','position':'absolute','top':'200px','left':'350px','padding':'12px'});
	$('#element1').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'100px','left':'350px','padding':'12px'});
	$('#element1').html("fqnssd");
	$('#element2').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'300px','left':'350px','padding':'12px'}).addClass("e5");
	$('#element2').html('Envoyer code');
	$('#element3').css({'height':'30px','width':'100px','background-color':'white','position':'absolute','top':'400px','left':'350px','padding':'12px'});

	$('body').on('click', '#element2.e5', function() {
		if($('input').val() == 'grotte'){
			$('#pop').css("display","none");
			clear_minigame();
			result.value = 1;
			window.clearInterval(errorI);
		}})
	errorI = window.setInterval(function(){
		error--;
		$('#element3').html($('#element3').html()+champi[i])
		i++;
		if(error == 0){	
			setTimeout(end,2000);
				function end(){
				$('#pop').css("display","none");
				window.clearInterval(errorI);
				clear_minigame();
				result.value = 2;
			}
		}
	},2000)
})
$('main').on('click', '#button_play.e6v',function(){
 	e6(1);
 });
$('main').on('click','#button_play.e6d',function(){
 	e6(2);
 });

function e6(param){
	if (param == 1){
		var t1 = {value: 1};
		var t2 = {value: 0};
		var t3 = {value: 1};
		var t4 = {value: 0};
		var t5 = {value: 0};
		var coup = {value: 15};
		var lock = {value: 0};

		var vis = {"background-image" : "url(assets/symbole/clou.png)", "display" : "block", "width" : "20px", "height" : "150px", "position" : "absolute", "transition": "1s", "background-image": "url(assets/symbole/clou.png)"};
		$('.popup').css("background-color", "blue");
		$("#text_pop").css({"margin": "8px", "font-size": "30px", "display": "block"});
		$("#text_pop").html("15");
		$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px", "display": "block"});
		$("#element1").css(vis).addClass("e6d");
		$("#element1").css({"left": " 190px", "top": "180px"});
		$("#element2").css(vis).addClass("e6d");
		$("#element2").css({"left": " 290px", "top": "280px"});
		$("#element3").css(vis).addClass("e6d");
		$("#element3").css({"left": " 390px", "top": "180px"});
		$("#element4").css(vis).addClass("e6d");
		$("#element4").css({"left": " 490px", "top": "280px"});
		$("#element5").css(vis).addClass("e6d");
		$("#element5").css({"left": " 590px", "top": "280px"});
		$("#element6").css({"display": "block", "width": "500px", "height": "250px", "position": "absolute", "left": "150px", "top": "300px", "background-image": "url(assets/symbole/crate.jpg)", "background-size": "250px"});
	}else{
		var t1 = {value: 0};
		var t2 = {value: 1};
		var t3 = {value: 0};
		var t4 = {value: 1};
		var t5 = {value: 1};
		var coup = {value: 15};
		var lock = {value: 0};

		var vis = {"background-color" : "white", "display" : "block", "width" : "20px", "height" : "150px", "position" : "absolute", "transition": "1s"};
		$('.popup').css("background-color", "blue");
		$("#text_pop").css({"margin": "8px", "font-size": "30px", "display": "block"});
		$("#text_pop").html("15");
		$("#container_pop").css({"height": "50px", "width": "50px", "top": "45px", "left": "700px", "display": "block"});
		$("#element1").css(vis).addClass("e6d");
		$("#element1").css({"left": " 190px", "top": "280px"});
		$("#element2").css(vis).addClass("e6d");
		$("#element2").css({"left": " 290px", "top": "180px"});
		$("#element3").css(vis).addClass("e6d");
		$("#element3").css({"left": " 390px", "top": "280px"});
		$("#element4").css(vis).addClass("e6d");
		$("#element4").css({"left": " 490px", "top": "180px"});
		$("#element5").css(vis).addClass("e6d");
		$("#element5").css({"left": " 590px", "top": "180px"});
		$("#element6").css({"display": "block", "width": "500px", "height": "250px", "position": "absolute", "left": "150px", "top": "300px", "background-image": "url(assets/symbole/crate.jpg)", "background-size": "250px"});
	}
	$('body').on('click', '#element1.e6d', function() {
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t3,"#element3");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$('body').on('click', '#element2.e6d', function() {
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t2,"#element2");
			nbr_update(t4,"#element4");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$('body').on('click', '#element3.e6d', function() {
		if (lock.value == 0){
			nbr_update(t3,"#element3");
			nbr_update(t4,"#element4");
			test(t1,t2,t3,t4,t5,coup);
		}	
	})
	$('body').on('click', '#element4.e6d', function() {
		if (lock.value == 0){
			nbr_update(t1,"#element1");
			nbr_update(t4,"#element4");
			test(t1,t2,t3,t4,t5,coup);
		}
	})
	$('body').on('click', '#element5.e6d', function() {
		if (lock.value == 0){
			nbr_update(t2,"#element2");
			nbr_update(t5,"#element5");
			test(t1,t2,t3,t4,t5,coup);
		}	
	})
	function nbr_update(num,nom){
		if (num.value == 0){
			num.value = 1;
		}else if (num.value == 1){
			num.value = 0;
		}
		pos_update(num.value,nom);
	}
	function pos_update(num,nom){
		if (num == 0){
			$(nom).css("top", "280px");
		}
		if (num == 1){
			$(nom).css("top", "180px");
		}
	}
	function test(t1,t2,t3,t4,t5,coup){
		coup.value -= 1;
		$("#text_pop").html(coup.value);
		if ((t1.value == t2.value) && (t2.value == t3.value) && (t3.value == t4.value) && (t4.value == t5.value)){
			lock.value = 1;
			end = setInterval(function(){
					$('#pop').css("display","none");
					clear_minigame();
					result.value = 1;
			},2000)
		}else if (coup.value == 0){
			end = setInterval(function(){
					$('#pop').css("display","none");
					clear_minigame();
					result.value = 2;
			},2000)
		}
	}
}
$('main').on('click','#button_play.e7',function(){
	let hit = 3;
	let boss_hp = 5;
	$('#element1_img').attr('src','assets/symbole/boss.jpg').css({'height':'70px','width':'auto','position':'absolute','top':'230px','left':'330px'}).addClass("e7");

	$('#element2_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive').addClass("e7");
	$('#element3_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive').addClass("e7");
	$('#element4_img').attr('src','assets/symbole/enemy.jpg').css({'height':'70px','width':'auto','position':'absolute','top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'}).addClass('alive').addClass("e7");

	$("#container_pop").css({"height": "55px", "width": "55px", "top": "45px", "left": "700px","visibility":"visible"});
	$("#text_pop").css({"margin": "1px", "font-size": "25px"});
	
	$("#text_pop").html(boss_hp+' PV')
	
	geneAleaEnemy =  window.setInterval(function(){
		if($('#element2_img').hasClass('alive')){
			$('#element2_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'});
		}
		if($('#element3_img').hasClass('alive')){
			$('#element3_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'});
		}
		if($('#element4_img').hasClass('alive')){
			$('#element4_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px'});
		}

		
	},1000)

	$('.alive').on('click',function(){
		$(this).removeClass('alive').css("visibility","hidden")
		hit --;
	})

	//faire des feintes

	$('body').on('click', '#element1_img.e7', function() {
		if(hit == 0){
			boss_hp --;
			$("#text_pop").html(boss_hp+' PV')
			$('#element2_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive');
			$('#element3_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive');
			$('#element4_img').css({'top':getRandomIntInclusive(10,540)+'px','left':getRandomIntInclusive(10,770)+'px','visibility':'visible'}).addClass('alive');
			hit = 3;

			if(boss_hp == 0){
				window.clearInterval(geneAleaEnemy);
				$('#pop').css("display","none");
				clear_minigame();
			}
		}
	})
})

function display_perso(pos,nom,state){
	$("#perso"+pos+"_img").attr("src","assets/character/"+nom+"_"+state+".png");
}

function changeText(cont1,cont2,speed){
	textOn.value = 1;
	var Otext=cont1.text();
	var Ocontent=Otext.split("");
	var i=0;
	function show(){
		if(i<Ocontent.length) {		
			cont2.append(Ocontent[i]);
			i=i+1;
		};
	};
	var Otimer=setInterval(show,speed);
	var Atimer=setTimeout(function(){
		textOn.value = 0;
		clearInterval(Otimer);
	},Ocontent.length*speed);
};

function clear_minigame(){
	for (i = 1; i <= 10; i++) {
		$('#element'+i+'_img').attr('src','assets/character/void_void.png');
		$('#element'+i).removeAttr( 'style' );
		//$('#element'+i).html("");
	}
	$('.popup').removeAttr('style');
	$('#container_pop').removeAttr('style');
	$('#text_pop').removeAttr('style');
	$('#text_pop').html('');
}

function ecrit_text(chaine){
	$("#text").html("");
	$("#text_hold").html("");
	$("#text_hold").html(chaine);
	changeText($("#text_hold"),$("#text"),5);
}

function ecrit_text_popup(chaine){
	$("#text_pop").html("");
	$("#text_pop_hold").html("");
	$("#text_pop_hold").html(chaine);
	changeText($("#text_pop_hold"),$("#text_pop"),5);
}

$("#button_play").click(function(){
	$("#pop").css("display", "block");
	$("#button_play").css("visibility","collapse");
})


function parle(perso){
	$('#perso'+perso+'_img').removeClass('gray').addClass("parle").css("width","400px")
}
function gris(perso){
	$('#perso'+perso+'_img').removeClass('parle').css("width","380px").addClass("gray")
}
