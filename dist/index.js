const recipes = [
  {
    id: 1,
    name: 'Limonade de Coco',
    servings: 1,
    ingredients: [
      {
        ingredient: 'Lait de coco',
        quantity: 400,
        unit: 'ml',
      },
      {
        ingredient: 'Jus de citron',
        quantity: 2,
      },
      {
        ingredient: 'Crème de coco',
        quantity: 2,
        unit: 'cuillères à soupe',
      },

      {
        ingredient: 'Sucre',
        quantity: 30,
        unit: 'grammes',
      },
      {
        ingredient: 'Glaçons',
      },
    ],
    time: 10,
    description:
      "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    appliance: 'Blender',
    ustensils: ['cuillère à Soupe', 'verres', 'presse citron'],
  },
  {
    id: 2,
    name: 'Poisson Cru à la tahitienne',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Thon Rouge (ou blanc)',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Concombre',
        quantity: 1,
      },
      {
        ingredient: 'Tomate',
        quantity: 2,
      },
      {
        ingredient: 'Carotte',
        quantite: 1,
      },
      {
        ingredient: 'Citron Vert',
        quantity: 5,
      },
      {
        ingredient: 'Lait de Coco',
        quantity: 100,
        unit: 'ml',
      },
    ],
    time: 60,
    description:
      'Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. (Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poissons avec le citron cette fois ci dans un Saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de Crème de coco',
    appliance: 'Saladier',
    ustensils: ['presse citron'],
  },
  {
    id: 3,
    name: 'Poulet coco réunionnais',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Poulet',
        quantity: 1,
      },
      {
        ingredient: 'Lait de coco',
        quantity: 400,
        unit: 'ml',
      },
      {
        ingredient: 'Coulis de tomate',
        quantity: 25,
        unit: 'cl',
      },
      {
        ingredient: 'Oignon',
        quantity: 1,
      },
      {
        ingredient: 'Poivron rouge',
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: 'cuillères à soupe',
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
    appliance: 'Cocotte',
    ustensils: ['couteau'],
  },
  {
    id: 4,
    name: 'Salade de riz',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Riz blanc',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Thon en miettes',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Tomate',
        quantity: 2,
      },
      {
        ingredient: 'Oeuf dur',
        quantity: 2,
      },
      {
        ingredient: 'Maïs',
        quantity: 300,
        unit: 'grammes',
      },
      {
        ingredient: 'Vinaigrette',
        quantity: 5,
        unit: 'cl',
      },
    ],
    time: 50,
    description:
      'Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs dur en quarts ou en lamelle au choix, coupez le tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au gout de chacun des corniches, olives etc..',
    appliance: 'Cuiseur de riz',
    ustensils: ['saladier', 'passoire'],
  },
  {
    id: 5,
    name: 'Tarte au thon',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pâte feuilletée',
        quantity: 1,
      },
      {
        ingredient: 'Thon en miettes',
        quantity: 130,
        unit: 'grammes',
      },
      {
        ingredient: 'Tomate',
        quantity: 2,
      },
      {
        ingredient: 'Crème fraiche',
        quantity: 2,
        unit: 'cuillères à soupe',
      },
      {
        ingredient: 'gruyère râpé',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Moutarde de Dijon',
        quantity: 1,
        unite: 'cuillères à soupe',
      },
    ],
    time: 45,
    description:
      'Etaler la pâte feuilleté aux dimensions du moule, étaler la moutarde sur la pâte feuilleté, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraiche sur toute la tarte et recouvrez de gruyère râpé. Cuire au four 30 minutes',
    appliance: 'Four',
    ustensils: ['moule à tarte', 'râpe à fromage', 'couteau'],
  },
  {
    id: 6,
    name: 'Tarte aux pommes',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Pâte brisée',
        quantity: 1,
      },
      {
        ingredient: 'Pomme',
        quantity: 3,
      },
      {
        ingredient: 'Oeuf',
        quantity: '2',
      },
      {
        ingredient: 'Crème fraiche',
        quantity: 25,
        unit: 'cl',
      },
      {
        ingredient: 'Sucre en Poudre',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 1,
        unit: 'sachets',
      },
    ],
    time: 50,
    description:
      "Commencez par mélanger les oeufs le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraiche aux oeufs. Une fois que tout est pret, étalez la tarte dans le moule. N'oubliez pas de piquer le fond avec une fourchette avant depositionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crême fraiche. Laisser cuire au four pendant 30 minutes",
    appliance: 'Four',
    ustensils: ['moule à tarte', 'saladier', 'fourchette'],
  },
  {
    id: 7,
    name: 'Tartelettes au chocolat et aux fraises',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Pâte sablée',
        quantity: 1,
      },
      {
        ingredient: 'Chocolat au lait',
        quantity: 300,
        unit: 'grammes',
      },
      {
        ingredient: 'Crème liquide',
        quantity: 80,
        unit: 'cl',
      },
      {
        ingredient: 'Beurre',
        quantity: '30',
        unit: 'grammes',
      },
      {
        ingredient: 'Fraise',
        quantity: 6,
      },
    ],
    time: 50,
    description:
      "Etaler la pate dans les moules à tartelette. Faire cuire la pate 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crême liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pate sur les tartelettes. Couper les fraises en 2 et les positionner sur ",
    appliance: 'Four',
    ustensils: ['moule à tartelettes (6)', 'casserolle'],
  },
  {
    id: 8,
    name: 'Brownie',
    servings: 10,
    ingredients: [
      {
        ingredient: 'Noix',
        quantity: '180',
        unit: 'grammes',
      },
      {
        ingredient: 'Chocolat noir',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 120,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 2,
      },
      {
        ingredient: 'Sucre en Poudre',
        quantity: '110',
        unit: 'grammes',
      },
      {
        ingredient: 'farine',
        quantity: 90,
        unit: 'grammes',
      },
    ],
    time: 60,
    description:
      "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeuf et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
    appliance: 'Four',
    ustensils: ['moule à gateaux', 'casserolle'],
  },
  {
    id: 9,
    name: 'Salade Méditerannéene fraiche au chèvre',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Concombre',
        quantity: 1,
      },
      {
        ingredient: 'Olives',
      },
      {
        ingredient: 'Fromage de chèvre',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Vinaigre Balsamic',
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: 'Basilic',
      },
    ],
    time: 15,
    description:
      "Peler le concombre le couper 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamic et l'huile d'olives à votre gout.",
    appliance: 'Saladier',
    ustensils: ['cuillère en bois', 'couteau'],
  },
  {
    id: 10,
    name: 'Tartiflette',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Roblochon',
        quantity: '1',
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 4.5,
        unit: 'kg',
      },
      {
        ingredient: 'Jambon fumé',
        quantity: 2,
        unit: 'tranches',
      },
      {
        ingredient: 'Oignon',
        quantity: 300,
        unit: 'grammes',
      },
      {
        ingredient: 'Vin blanc sec',
        quantity: 30,
        unit: 'cl',
      },
    ],
    time: 60,
    description:
      "Commencer par cuire les pommes de terre dans l'eau bouillante. Puis epluchez les et coupez les en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Salez, poivrez à votre gout ( et celui de vos convives ) Laissez cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Coupez le rebelochon, soit en tranches, soit le couper en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (environ 220°) durant 25 minutes. C'est prêt !",
    appliance: 'Four',
    ustensils: ['plat à gratin', 'couteau', 'Économe'],
  },
  {
    id: 11,
    name: 'Salade tomate, mozzarella et pommes',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Tomates cerises',
        quantity: 250,
        unit: 'grammes',
      },
      {
        ingredient: 'Mozzarella',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Jambon de parme',
        quantity: 4,
        unit: 'tranches',
      },
      {
        ingredient: 'Pommes',
        quantity: 1,
      },
      {
        ingredient: 'Salade Verte',
        quantity: 1,
      },
      {
        ingredient: 'Vinaigrette',
        quantity: 5,
        unit: 'cl',
      },
    ],
    time: 10,
    description:
      'Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonnez à votre gout. ',
    appliance: 'Saladier',
    ustensils: ['couteau', 'cuillère à melon'],
  },
  {
    id: 12,
    name: 'Compote pomme rhubarbe',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Rhubarbe',
        quantity: 160,
        unit: 'grammes',
      },
      {
        ingredient: 'Pommes',
        quantity: 8,
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 6,
        unit: 'sachets',
      },
      {
        ingredient: 'Eau',
        quantity: '0.5',
        unit: 'tasses',
      },
    ],
    time: 40,
    description:
      "Éplucher les fruits et les couper en morceaux, les mettre dans une casserolle en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
    appliance: 'Casserole',
    ustensils: ['couteau', 'économe'],
  },
  {
    id: 13,
    name: 'Salade mâchée de patates',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Mâche',
        quantity: 60,
        unit: 'grammes',
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Échalote',
        quantity: 2,
      },
      {
        ingredient: 'Vinaigre de cidre',
        quantity: 1,
        unit: 'cuillère à soupe',
      },
      {
        ingredient: "huile d'olive",
        quantity: 2,
        unit: 'cuillère à soupe',
      },
    ],
    time: 40,
    description:
      "Cuire les pommes de terre environ 30 minutes. Découper les échalottes finement. Durant la cuisson des pommes de terre. Préparez la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Salez poivrez à discrétion. Dans un saladier, mettre le mâche. Ajouter",
    appliance: 'Casserole',
    ustensils: ['couteau', 'saladier', 'cuillère en bois'],
  },
  {
    id: 14,
    name: 'Galette Bretonne Saucisse et Fromage à raclette',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Saucisse bretonne ou de toulouse',
        quantity: 2,
      },
      {
        ingredient: 'Farine de blé noir',
        quantity: 130,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 1,
      },
      {
        ingredient: 'Fromage à raclette',
        quantity: 300,
        unit: 'grammes',
      },
      {
        ingredient: 'Oignon',
        quantity: 1,
      },
      {
        ingredient: 'Beurre',
        quantity: 75,
        unit: 'grammes',
      },
    ],
    time: 100,
    description:
      "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidire. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
    appliance: 'Four',
    ustensils: ['poelle à frire', 'couteau'],
  },
  {
    id: 15,
    name: 'Crêpes Chocolat Banane',
    servings: 10,
    ingredients: [
      {
        ingredient: 'Oeuf',
        quantity: 3,
      },
      {
        ingredient: 'Farine',
        quantity: 250,
        unit: 'grammes',
      },
      {
        ingredient: 'Lait',
        quantity: 600,
        unit: 'ml',
      },
      {
        ingredient: 'Beurre salé',
        quantity: 30,
        unit: 'grammes',
      },
      {
        ingredient: 'Chocolat au lait',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Banane',
        quantity: 4,
      },
    ],
    time: 60,
    description:
      "Mélangez dans un saladier, la farine, les oeufs, et le lait. Battez jusqu'à avoir une masse homogène. Pendant ce temps faites fondre le beurre et ajoutez en une partie à la pâte à crêpes. Faire fondre le chocolat ( avec le reste du beurre salé ). Lorsque vous chauffez les crêpes. Ajouter le chocolat fondu et les bananes coupées en rondelles. Ajoutez une touche de chantilly pour les gourmands",
    appliance: 'Poële à crêpe',
    ustensils: ['saladier', 'louche', 'cuillère en bois'],
  },
  {
    id: 16,
    name: 'Gratin de pâtes à la tomate',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Tomate',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Mozzarella',
        quantity: 250,
        unit: 'grammes',
      },
      {
        ingredient: 'Pennes',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Basilic',
        quantity: 1,
        unit: 'tiges',
      },
      {
        ingredient: "huile d'olives",
        quantity: 2,
        unit: 'cuillère à soupe',
      },
    ],
    time: 45,
    description:
      "Faire cuire les pâtes si vous n'avez pas de pennes des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches soit en dés. Coupez le basilic en petites morceaux et mélangez le aux tomates.  Coupez la mozzarella en tranche. Préchauffez le four à 200°. Alternez entre couches de pattes et couches de tomates, terminez par une couche de pates et recouvrir du fromage. Laisser au four 30 minutes et régalez vous ! Une recette simple qui fera plaisir au petits comme aux grands.",
    appliance: 'Four',
    ustensils: ['plat à gratin', 'couteau', 'râpe à fromage'],
  },
  {
    id: 17,
    name: 'Smoothie à la fraise',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Fraise',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Pastèque',
        quantity: 0.5,
      },
      {
        ingredient: 'Jus de citron',
        quantity: 1,
        unit: 'cuillères à soupe',
      },
      {
        ingredient: 'Glaçons',
        quantity: 8,
      },
      {
        ingredient: 'Menthe',
      },
    ],
    time: 15,
    description:
      'Coupez les fraises en morceaux, découpez la chaire de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de juste de citron ainsi que les glaçons. Ajoutez quelques fueilles de menthe pour plus de fraicheur. Mixez le tout. Servir et déguster.',
    appliance: 'Blender',
    ustensils: ['verres', 'couteau', 'presse citron'],
  },
  {
    id: 18,
    name: 'Smoothie ananas et vanille',
    servings: 5,
    ingredients: [
      {
        ingredient: 'Ananas',
        quantity: 1,
      },
      {
        ingredient: 'Glace à la vanille',
        quantity: 500,
        unit: 'ml',
      },
      {
        ingredient: 'Lait',
        quantity: 50,
        unit: 'cl',
      },
    ],
    time: 10,
    description:
      "Séparez 1/5ème d'Ananas ( une belle tranche qui servira pour la décoration des verres ), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixez. Servir et décorer avec l'ananas restant. C'est prêt",
    appliance: 'Blender',
    ustensils: ['verres', 'couteau'],
  },
  {
    id: 19,
    name: 'Shake Banane Kiwi',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Kiwi',
        quantity: 4,
      },
      {
        ingredient: 'Citron',
        quantity: 1,
      },
      {
        ingredient: 'Lait',
        quantity: 1,
        unit: 'litres',
      },
      {
        ingredient: 'Sucre glace',
        quantity: 30,
        unit: 'grammes',
      },
      {
        ingredient: 'Banane',
        quantity: 1,
      },
    ],
    time: 0,
    description:
      "Coupez les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixez. Ajoutez des glaçons si le lait n'a pas été mis au frais.",
    appliance: 'Blender',
    ustensils: ['couteau', 'verres', 'presse citron'],
  },
  {
    id: 20,
    name: 'Pates Carbonara',
    servings: 5,
    ingredients: [
      {
        ingredient: 'Tagliatelles',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Lardons',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Crème fraiche',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Parmesan',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: 'cuillères à soupe',
      },
    ],
    time: 30,
    description:
      "Faire cuire les pates comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crême fraiche et baisser le feu au minimum. Quand les Tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
    appliance: 'Sauteuse',
    ustensils: ['râpe à fromage', 'cuillère en bois'],
  },
  {
    id: 21,
    name: 'Spaghettis à la bolognaise',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Spaghettis',
        quantity: 400,
        unit: 'grammes',
      },
      {
        ingredient: 'Oignon',
        quantity: 2,
      },
      {
        ingredient: 'Coulis de tomate',
        quantity: 300,
        unit: 'grammes',
      },
      {
        ingredient: 'Viande hachée 1% de matière grasse',
        quantity: 400,
        unit: 'grammes',
      },
      {
        ingredient: 'Vin rouge',
        quantity: 20,
        unit: 'cl',
      },
      {
        ingredient: 'Crème Fraiche',
        quantity: 1,
        unit: 'cuillères à soupe',
      },
    ],
    time: 30,
    description:
      'Cuisiner la viande hachée dans une poelle à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pates le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pates sont cuites, ajouter la crème fraiche à la viande hachée. Serivir.',
    appliance: 'Casserolle.',
    ustensils: ['Cuillère en bois', 'louche', 'couteau'],
  },
  {
    id: 22,
    name: 'Fondant au chocolat',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Beurre',
        quantity: 160,
        unit: 'grammes',
      },
      {
        ingredient: 'Chocolat noir',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Farine',
        quantity: 50,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 4,
      },
      {
        ingredient: 'Sucre',
        quantity: 150,
        unit: 'grammes',
      },
    ],
    time: 30,
    description:
      "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrez le moule à gateaux. Mettre au four préchauffé à 200° puis faites chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crême dessert.",
    appliance: 'Four',
    ustensils: ['moule à gateaux', 'fouet', 'casserolle'],
  },
  {
    id: 23,
    name: 'Quiche lorraine',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pâte brisée',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Lardons',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 30,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 3,
      },
      {
        ingredient: 'Crème Fraîche',
        quantity: 20,
        unit: 'cl',
      },
      {
        ingredient: 'Lait',
        quantity: 20,
        unit: 'cl',
      },
    ],
    time: 60,
    description:
      "Etaler la pate dans un moule et la piquer.Parsemer de beurre. Faire chauffer les lardon dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, salez poivrez à votre gout. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
    appliance: 'Four',
    ustensils: ['moule à gateaux', 'rouleau à patisserie', 'fouet'],
  },
  {
    id: 24,
    name: 'Salade de pâtes',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Thon en miettes',
        quantity: 160,
        unit: 'grammes',
      },
      {
        ingredient: 'Maïs',
        quantity: 60,
        unit: 'grammes',
      },
      {
        ingredient: 'Tomate',
        quantity: 1,
      },
      {
        ingredient: 'Concombre',
        quantity: 0.5,
      },
      {
        ingredient: 'Macaronis',
        quantity: 300,
        unit: 'grammes',
      },
      {
        ingredient: 'Mayonnaise',
        quantity: 2,
        unit: 'cuillères à soupe',
      },
    ],
    time: 40,
    description:
      'Découper le concombre et les tomates en dés, les mettre dans un saladier avec le mais et les miettes de poisson, ajouter les pates. Ajouter la mayonnaise. Mélanger le tout et servir frais.',
    appliance: 'Saladier',
    ustensils: ['couteau', 'cuillère en bois'],
  },
  {
    id: 25,
    name: 'Cookies',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Sucre',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Farine',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Chocolat noir en pepites',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 1,
      },
    ],
    time: 30,
    description:
      "Faire fondre le beurre et le mélanger avec le sucre. Finalement ajouter l'oeuf. Ajouter la farine tout en mélangeant peu pa peu pour avoir une masse sans grumaux. Ajouter les pépites de chocolat. Faire, une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
    appliance: 'Four',
    ustensils: ['fouet', 'saladier', 'plaque de cuisson'],
  },
  {
    id: 26,
    name: 'Soupe de tomates',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Tomate',
        quantity: 6,
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 1,
      },
      {
        ingredient: "Huile d'olives",
      },
      {
        ingredient: 'Oignon',
        quantity: 1,
      },
      {
        ingredient: 'Ail',
        quantity: 1,
        unit: 'gousses',
      },
    ],
    time: 25,
    description:
      "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
    appliance: 'Mixer',
    ustensils: ['cocotte minute', 'couteau'],
  },
  {
    id: 27,
    name: "Soupe à l'oseille",
    servings: 4,
    ingredients: [
      {
        ingredient: 'Oseille',
        quantity: 2,
      },
      {
        ingredient: 'Oeuf',
        quantity: 1,
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 4,
        unit: 'cuillère à soupe',
      },
      {
        ingredient: 'Vermicelles',
        quantity: 1,
        unit: 'verres',
      },
      {
        ingredient: 'Beurre salé',
        quantity: 50,
        unit: 'grammes',
      },
    ],
    time: 15,
    description:
      "Faire fondre l'oseille avec du beurre demi sel, ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. une foit prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crême fraîche",
    appliance: 'Casserolle',
    ustensils: ['couteau', 'cuillère en bois'],
  },
  {
    id: 28,
    name: 'Soupe de poireaux',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Poireau',
        quantity: 3,
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 400,
        unit: 'grammes',
      },
      {
        ingredient: 'Oseille',
        quantity: 75,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 50,
        unit: 'grammes',
      },
      {
        ingredient: 'Crême fraîche',
        quantity: 10,
        unit: 'cl',
      },
    ],
    time: 80,
    description:
      "Emincer les blanc de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixez. Ajoutez la crème. Bon appetit.",
    appliance: 'Mixer',
    ustensils: ['casserolle', 'couteau'],
  },
  {
    id: 29,
    name: 'Houmous Express',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Pois chiches',
        quantity: 1,
        unit: 'boites',
      },
      {
        ingredient: 'Ail',
        quantity: 1,
        unit: 'gousses',
      },
      {
        ingredient: 'Citron',
        quantity: 2,
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: 'Paprika',
      },
    ],
    time: 30,
    description:
      "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
    appliance: 'Mixer',
    ustensils: ['cuillère en bois', 'presse citron'],
  },
  {
    id: 30,
    name: 'Purée de pois cassés',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pois Cassé',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Oignon',
        quantity: 1,
      },
      {
        ingredient: 'Ail',
        quantity: 2,
        unit: 'gousses',
      },
    ],
    time: 60,
    description:
      "Mettre tous les ingrédients dans une cocotte. ajouter de l'eau pour recouvrir l'ensemble et laisser cuirre à petit feur pour 1 heure. Passer au mixer. Salez, poivrez. C'est prêt",
    appliance: 'Mixer',
    ustensils: ['casserolle', 'cuillère en bois'],
  },
  {
    id: 31,
    name: 'Jardinière de légumes',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Carotte',
        quantity: 2,
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 2,
      },
      {
        ingredient: 'Haricots verts',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Petits poids',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Lardons',
        quantity: 150,
        unit: 'grammes',
      },
    ],
    time: 60,
    description:
      "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit poids et les haricots verts ( tous deux pré cuits ). Ajouter Sel, poivre, thyms et laurier",
    appliance: 'Poële',
    ustensils: ['Couteau', 'économe'],
  },
  {
    id: 32,
    name: 'Croque Monsieur à la dinde',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pain de mie',
        quantity: 8,
        unit: 'tranches',
      },
      {
        ingredient: 'Blanc de dinde',
        quantity: 4,
        unit: 'tranches',
      },
      {
        ingredient: 'Emmental',
        quantity: 8,
        unit: 'tranches',
      },
      {
        ingredient: 'Gruyère',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Lait',
        quantity: 5,
        unit: 'cl',
      },
      {
        ingredient: 'Noix de muscade',
        quantity: 1,
        unit: 'pincées',
      },
    ],
    time: 20,
    description:
      "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie 1 tranche d'émental, une de blanc de dinde, et une autre d'emmental. Dans un récipient, mélanger le gruyère rappé avec le lait et la noix de muscade. Mettre sur les croque monsieux. Placer au four durnat 10 minutes.",
    appliance: 'Four',
    ustensils: ['râpe à fromage', 'cuillère à Soupe', 'couteau'],
  },
  {
    id: 33,
    name: 'Sandwich au saumon fumé',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pain de mie',
        quantity: 8,
        unit: 'tranches',
      },
      {
        ingredient: 'Saumon Fumé',
        quantity: 4,
        unit: 'tranches',
      },
      {
        ingredient: 'Feuilles de laitue',
        quantity: 4,
      },
      {
        ingredient: 'Fromage blanc',
        quantity: 4,
        unit: 'cuillères à soupe',
      },
      {
        ingredient: 'Jus de citron',
        quantity: 1,
        unit: 'cuillères à soupe',
      },
    ],
    time: 5,
    description:
      "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et poivre à votre gout. Faire dorer le pain de mie. Puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
    appliance: 'Four',
    ustensils: ['couteau', 'cuillère en bois'],
  },
  {
    id: 34,
    name: 'Purée de patate douce',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Patate douce',
        quantity: 800,
        unit: 'grammes',
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 20,
        unit: 'cl',
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: 'Orange',
        quantity: 1,
      },
    ],
    time: 25,
    description:
      "Eplucher les patates douces et coupez les en morceaux. Les faire cuire durant 20 minute dans une casserolle d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son gout. Salez, poivrez. Pressez l'orange et ajouter le jus à l'ensemble. Servir.",
    appliance: 'Mixer',
    ustensils: ['couteau', 'économe', 'cuillère en bois'],
  },
  {
    id: 35,
    name: 'Purée de carottes',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Carotte',
        quantity: 6,
      },
      {
        ingredient: 'Pommes de terre',
        quantity: 1,
      },
      {
        ingredient: 'Beurre',
        quantity: 20,
        unit: 'grammes',
      },
      {
        ingredient: 'Crème fraîche',
        quantity: 2,
        unit: 'cuillères à soupe',
      },
      {
        ingredient: 'Cumin',
        quantity: 1,
        unit: 'cuillères à café',
      },
      {
        ingredient: 'Noix de muscade',
        quantity: 1,
        unit: 'pincées',
      },
    ],
    time: 25,
    description:
      'Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumun et la noix de muscade.',
    appliance: 'Mixer',
    ustensils: ['cocotte minute', 'couteau', 'cuillère en bois'],
  },
  {
    id: 36,
    name: 'Lasagne Courgettes et Chèvre',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Courgette',
        quantity: 2,
      },
      {
        ingredient: 'Fromage de chèvre',
        quantity: 4,
      },
      {
        ingredient: 'Lait',
        quantity: 25,
        unit: 'cl',
      },
      {
        ingredient: 'Lasagnes',
        quantity: 5,
        unit: 'feuilles',
      },
      {
        ingredient: 'Gruyère',
        quantity: 40,
        unit: 'grammes',
      },
      {
        ingredient: 'Maïzena',
        quantity: 1,
        unit: 'cuillères à soupe',
      },
    ],
    time: 35,
    description:
      'Raper les courgette et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamelle avec le lait et la maizena. Salez poivrez, ajouter de la noix de muscade selon les gouts. Dans un plat, mettre un peu de sauces au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauces et ajouter le gruiyère. Passer au four à 180° durant 20 à 25 minutes.',
    appliance: 'Four',
    ustensils: ['plat à gratin', 'râpe à fromage', 'fouet'],
  },
  {
    id: 37,
    name: 'Courgettes farcies au boeuf',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Courgette',
        quantity: 2,
      },
      {
        ingredient: 'Viande hachée',
        quantity: 600,
        unit: 'grammes',
      },
      {
        ingredient: "Huile d'olives",
        quantity: 25,
        unit: 'cl',
      },
      {
        ingredient: 'Oignon',
        quantity: 1,
      },
      {
        ingredient: 'Coulis de tomates',
        quantity: 20,
        unit: 'cl',
      },
      {
        ingredient: 'Gruyère',
        quantity: 50,
        unit: 'grammes',
      },
    ],
    time: 60,
    description:
      "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver.Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
    appliance: 'Four',
    ustensils: ['couteau', 'cuillère en bois', 'Poelle à frire'],
  },
  {
    id: 38,
    name: 'Pain Perdu',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pain',
        quantity: 6,
        unit: 'tranches',
      },
      {
        ingredient: 'Lait',
        quantity: 25,
        unit: 'cl',
      },
      {
        ingredient: 'Oeuf',
        quantity: 3,
      },
      {
        ingredient: 'Sucre roux',
        quantity: 75,
        unit: 'grammes',
      },
    ],
    time: 20,
    description:
      'Fouettez les oeufs, le sucre et le lait. tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir',
    appliance: 'Four',
    ustensils: ['fouet', 'bol', 'Cuillère à Soupe'],
  },
  {
    id: 39,
    name: 'Crumble aux pommes',
    servings: 40,
    ingredients: [
      {
        ingredient: 'Pomme',
        quantity: 2,
      },
      {
        ingredient: 'Farine',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 50,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre roux',
        quantity: 80,
        unit: 'grammes',
      },
    ],
    time: 40,
    description:
      'Découper les pommes en dé. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus placez la pate que vous avez obtenu. Cuire 20 minutes au four',
    appliance: 'Four',
    ustensils: ['saladier', 'couteau', 'fouet'],
  },
  {
    id: 40,
    name: 'Limonade',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Eau',
        quantity: 1,
        unit: 'Litres',
      },
      {
        ingredient: 'Citron Vert',
        quantity: 3,
      },
      {
        ingredient: 'Sucre en poudre',
        quantity: 4,
        unit: 'cuillères à café',
      },
      {
        ingredient: 'Bicarbonate',
        quantity: 1,
        unit: 'cuillères à café',
      },
    ],
    time: 10,
    description:
      "Dans un saladier mettre l'eau, le jus des cirtons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçon et une feuille de menthe pour la déco.",
    appliance: 'Saladier',
    ustensils: ['cuillère en bois'],
  },
  {
    id: 41,
    name: 'Mousse au chocolat',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Oeuf',
        quantity: 3,
      },
      {
        ingredient: 'Chocolat noir',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 1,
        unit: 'sachets',
      },
    ],
    time: 20,
    description:
      "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélangez délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
    appliance: 'Casserolle',
    ustensils: ['fouet', 'spatule', 'verres'],
  },
  {
    id: 42,
    name: 'Charlotte au poires',
    servings: 3,
    ingredients: [
      {
        ingredient: 'Chocolat',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 3,
      },
      {
        ingredient: 'Poires au jus',
        quantity: 0.5,
        unit: 'boites',
      },
      {
        ingredient: 'Boudoirs',
        quantity: 15,
      },
    ],
    time: 60,
    description:
      'Commencez par préparer la mousse au chocolat au moins 2 heures avant. Quand la mousse est prête et a reposée. Alors mouiller les boudoirs dans le jus des poires. Disposer. Alterner : mousse au chocolat, boudoirs et poires. Mettre au frais.',
    appliance: 'Moule à charlotte',
    ustensils: ['saladier', 'couteau', 'fouet'],
  },
  {
    id: 43,
    name: 'Tarte au citron',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Pâte brisée',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre fondu',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 3,
      },
      {
        ingredient: 'Citron',
      },
    ],
    time: 50,
    description:
      'Préchauffez le fours à 200°. Etaler la pate. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pate. Au four 30 minutes. Bon appetit ',
    appliance: 'Four',
    ustensils: ['rouleau à patisserie', 'moule à tarte', 'presse citron'],
  },
  {
    id: 44,
    name: 'Crème déssert au chocolat',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Lait',
        quantity: 1,
        unit: 'litres',
      },
      {
        ingredient: 'Chocolat',
        quantity: 200,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 50,
        unit: 'grammes',
      },
      {
        ingredient: 'farine',
        quantity: 40,
        unit: 'grammes',
      },
    ],
    time: 15,
    description:
      'Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter du sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres',
    appliance: 'Casserolle',
    ustensils: ['cuillère en bois'],
  },
  {
    id: 45,
    name: 'Crème patissière',
    servings: 8,
    ingredients: [
      {
        ingredient: 'Lait',
        quantity: 50,
        unit: 'cl',
      },
      {
        ingredient: 'Oeuf',
        quantity: 2,
      },
      {
        ingredient: 'Farine',
        quantity: 30,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre',
        quantity: 80,
        unit: 'grammes',
      },
    ],
    time: 30,
    description:
      "Faire bouillir le lait ( on peut y ajouter de l'essence de vanille. Battre les oeufs et le sucre, ajouter la farine puis finalement ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
    appliance: 'Casserolle',
    ustensils: ['fouet', 'saladier'],
  },
  {
    id: 46,
    name: 'Far breton',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Farine',
        quantity: 250,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre',
        quantity: 150,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre vanillé',
        quantity: 1,
        unit: 'sachets',
      },
      {
        ingredient: 'Oeuf',
        quantity: 4,
      },
      {
        ingredient: 'Lait',
        quantity: 1,
        unit: 'litre',
      },
      {
        ingredient: 'Pruneaux',
        quantity: 100,
        unit: 'grammes',
      },
    ],
    time: 60,
    description:
      'Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit vers de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes',
    appliance: 'Four',
    ustensils: ['fouet', 'moule', 'verres'],
  },
  {
    id: 47,
    name: 'Mousse au citron',
    servings: 6,
    ingredients: [
      {
        ingredient: 'Jus de citron',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Mascarpone',
        quantity: 250,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre',
        quantity: 100,
        unit: 'grammes',
      },
      {
        ingredient: 'Crème Fraîche',
        quantity: 20,
        unit: 'cl',
      },
    ],
    time: 5,
    description:
      'Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraiche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir',
    appliance: 'Saladier',
    ustensils: ['fouet', 'verres', 'cuillère en bois'],
  },
  {
    id: 48,
    name: 'Pizza',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Pâte à pizza',
        quantity: 1,
      },
      {
        ingredient: 'Tomates pelées',
        quantity: 1,
        unit: 'boites',
      },
      {
        ingredient: 'Lardons',
        quantity: 1,
        unit: 'barquettes',
      },
      {
        ingredient: 'Champignons de paris',
        quantity: 1,
        unit: 'boites',
      },
      {
        ingredient: 'Gruyère',
        quantity: 200,
        unit: 'grammes',
      },
    ],
    time: 40,
    description:
      'Étaler la pate a pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère eet passer au four à 220° durant 20 minutes',
    appliance: 'Four',
    ustensils: ['rouleau à patisserie', 'râpe à fromage', 'couteau'],
  },
  {
    id: 49,
    name: 'Smoothie tropical',
    servings: 4,
    ingredients: [
      {
        ingredient: 'Bananes',
        quantity: 2,
      },
      {
        ingredient: 'Kiwis',
        quantity: 3,
      },
      {
        ingredient: 'Mangue',
        quantity: 1,
      },
      {
        ingredient: 'Ananas',
        quantity: 4,
        unit: 'tranches',
      },
      {
        ingredient: 'Miel',
        quantity: 2,
        unit: 'cuillères à soupe',
      },
    ],
    time: 0,
    description:
      "Découper les fruits. Le passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
    appliance: 'Blender',
    ustensils: ['couteau', 'verres'],
  },
  {
    id: 50,
    name: 'Frangipane',
    servings: 2,
    ingredients: [
      {
        ingredient: 'Pâte feuilletée',
        quantity: 400,
        unit: 'grammes',
      },
      {
        ingredient: 'Oeuf',
        quantity: 6,
      },
      {
        ingredient: "Poudre d'amendes",
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Beurre',
        quantity: 500,
        unit: 'grammes',
      },
      {
        ingredient: 'Sucre glace',
        quantity: 500,
        unit: 'grammes',
      },
    ],
    time: 60,
    description:
      "Préparer la frangipane : Mélanger le sucre la poudre d'amander, le beurre et les oeufs. Etaler la moitier de la pate feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pate feuilletée. Mettre au four 30 minutes",
    appliance: 'Four',
    ustensils: ['rouleau à patisserie', 'fouet'],
  },
];

// créer un élément du dom à partir d'un vnode
const createElement = (vnode) => {
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode) // Catch if vnode is just text
  }

  const el = document.createElement(vnode.tag);
  if (vnode.props) {
    Object.entries(vnode.props).forEach(([name, value]) => {
      el[name] = value;
    });
  }
  if (vnode.children) {
    vnode.children.forEach((child) => {
      el.appendChild(createElement(child));
    });
  }
  return el
};
// renvoie un objet qui permettra de créer un élement à insérer dans le dom
const m = (tag, props, children) => ({
  tag,
  props,
  children,
});
// transforme un element du dom en fonction d'un nouveau VNODE et d'un ancien VNODE
const patch = (el, newVNode, oldVNode) => {
  if (!newVNode && newVNode !== '') return el.remove()
  if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
    if (oldVNode !== newVNode) return el.replaceWith(createElement(newVNode))
  } else {
    //
    if (oldVNode?.tag !== newVNode.tag) {
      return el.replaceWith(createElement(newVNode))
    }

    if (oldVNode) {
      for (const propName in oldVNode.props) {
        if (oldVNode.props[propName] === newVNode.props[propName])
          return el.replaceWith(createElement(newVNode))
      }

      for (let i = el.childNodes.length - 1; i >= 0; i--) {
        patch(el.childNodes[i], newVNode.children[i], oldVNode.children[i]);
      }
    }
  }
};

function createTitle(name) {
  const vnode = m('h3', { className: 'recipe-title' }, [name]);
  return vnode
}
function createTime(time) {
  const vnode = m('p', { className: 'recipe-time' }, [
    {
      tag: 'img',
      props: { src: './images/time.svg' },
    },
    `${time} min`,
  ]);
  return vnode
}

function createIngredients(li) {
  const vnode = m('ul', { className: 'recipe-list' }, li);
  return vnode
}
function createIngredient(a) {
  const vnode = m('span', { className: 'bold' }, [`${a}`]);
  return vnode
}
function createQuantity(a) {
  const vnode = m('span', { className: 'tarzan' }, [`: ${a}`]);
  return vnode
}
function createUnit(a) {
  if (a === 'cuillères à soupe') {
    a = 'cuillères';
  }
  if (a === 'grammes') {
    a = 'g';
  }
  const vnode = m('span', { className: 'zoro' }, [`${a}`]);
  return vnode
}
function createDescription(howtodo) {
  const vnode = m(
    'p',
    {
      className: 'recipe-howtodo',
    },
    [howtodo]
  );

  return vnode
}
function createLi1(ingredient, quantity, unit) {
  const vnode = m(
    'li',

    undefined,
    [createIngredient(ingredient), createQuantity(quantity), createUnit(unit)]
  );
  return vnode
}
function createLi2(ingredient, quantity) {
  const vnode = m('li', undefined, [createIngredient(ingredient), createQuantity(quantity)]);
  return vnode
}
function createLi3(ingredient) {
  const vnode = m(
    'li',
    {
      className: 'bold',
    },
    [createIngredient(ingredient)]
  );
  return vnode
}
// Vnode qui permet par la suite de créer les recettes à afficher dans le DOM
function createPage(recipes2) {
  let recipesDisplay = recipes2;
  const vnode = m(
    'div',
    { className: 'main-wrapper' },
    recipesDisplay.map((recipe) => {
      let ingredients = recipe.ingredients.map((x) => {
        let lis;
        if (x.ingredient && x.quantity && x.unit) {
          lis = createLi1(x.ingredient, x.quantity, x.unit);
        }
        if (x.ingredient && x.quantity && x.unit === undefined) {
          lis = createLi2(x.ingredient, x.quantity);
        }
        if (x.ingredient && x.quantity === undefined && x.unit === undefined) {
          lis = createLi3(x.ingredient);
        }
        return lis
      });

      return m('article', { className: 'recipe-card' }, [
        m(
          'div',
          {
            className: 'recipe-first',
          },
          [createTitle(recipe.name), createTime(recipe.time)]
        ),
        m('div', { className: 'recipe-sec' }, [
          // Je veux que create ingredients me retourne un objet , avec comme enfants une liste de li

          createIngredients(ingredients),
          createDescription(recipe.description),
        ]),
      ])
    })
  );
  return vnode
}
// crée un vnode qui affichera par la suite qu'il n'y a pas de recettes correspondant à la recherche
function createEmptyPage() {
  const vnode = m('div', { className: 'main-wrapper' }, [
    m('div', { className: 'emptyPage' }, ["Aucun résultat n'a été trouvé"]),
  ]);
  return vnode
}

function createsLiIngredient(li) {
  const vnode = m('li', { className: 'liIngredients' }, [li]);

  return vnode
}
// Permet de créer la liste des ingrédients de tous les dropdown en fonction du dropdown selectionné /ou du tri effectué sur l'input du dropdown en question
function createUlIngredient(arrayOfLi) {
  const vnode = m(
    'ul',
    { className: 'ulIngredients' },
    arrayOfLi.map((meals) => createsLiIngredient(meals))
  );
  return vnode
}

//Renvoie une liste de recette en fonction du/des tag ingrédients selectionné.
function triTagAppliance(array) {
  let newArray = array;
  let sortedArray1 = [];
  if (tags.appliance.length === 1) {
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].appliance === tags.appliance[0]) {
        sortedArray1.push(newArray[i]);
      }
    }

    return sortedArray1
  } else if (tags.appliance.length === 0) {
    return newArray
  } else {
    return sortedArray1
  }
}
//Renvoie une liste de recette en fonction du/des tag ustensiles selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
function triTagUstensils(array) {
  let newArray = array;
  let sortedArray1 = [];
  if (tags.ustensils.length > 0) {
    for (let i = 0; i < newArray.length; i++) {
      let recipe = false;
      for (let k = 0; k < tags.ustensils.length; k++) {
        if (newArray[i].ustensils.includes(tags.ustensils[k])) {
          recipe = true;
        } else {
          recipe = false;
        }
      }
      if (recipe) {
        sortedArray1.push(newArray[i]);
        recipe = false;
      }
    }
    return sortedArray1
  } else {
    return newArray
  }
}
//Renvoie une liste de recette en fonction du/des tags appareils selectionné.
// S'il n'y a pas de tag, renvoie la liste envoyé en paramètre
function triTagIngredients(array) {
  let sortedArray1 = [];

  if (tags.ingredient.length > 0) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].ingredients.length; j++) {
        let recipe = false;
        for (let k = 0; k < tags.ingredient.length; k++) {
          if (array[i].ingredients[j].ingredient.includes(tags.ingredient[k])) {
            recipe = true;
          } else {
            recipe = false;
          }
        }
        if (recipe) {
          sortedArray1.push(array[i]);
          recipe = false;
        }
      }
    }
    return sortedArray1
  } else {
    return array
  }
}
// Fonction qui va aller trier pour chaque tag la liste de recette à renvoyé
// Retourne la liste des recettes triés par toute les fonctions de tris des ustensiles, ingrédients et appareils ( appliance)
function triTagAll(array) {
  let newArray = array;
  newArray = triTagAppliance(newArray);
  newArray = triTagUstensils(newArray);
  newArray = triTagIngredients(newArray);
  return newArray
}
// Fonction de l'input principal qui va chercher dans le nom, la description, et les ingrédients s'il y a une correspondance avec la recherche effectué.
function searchMainInput(meals, value) {
  let recipes2 = [];
  // boucle sur tous les repas
  // si le nom ou la description du repas contient(inclus) la value passé en argument
  // alors ajoute ce repas a un nouveau tableau
  for (let i = 0; i < meals.length; i++) {
    if (
      meals[i].name.toLowerCase().includes(value) ||
      meals[i].description.toLowerCase().includes(value) ||
      meals[i].ingredients.filter((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(value)
      ).length > 0
    )
      recipes2.push(meals[i]);
  }
  return recipes2
}

// Fonction qui ajoute un tag quand on a cliqué sur un ustensils dans la liste des ustensiles dans le dropdown
function addTagEventUstensils() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ulIngredients = document.querySelector('.ulIngredients');
  ulIngredients.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  // Selectionne tous les li
  ulIngredients.querySelectorAll('li').forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute('data-foo')) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute('data-foo', 'bar');
      li.addEventListener('click', (e) => {
        if (tags.ustensils.includes(li.innerText)) {
          return
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.ustensils.push(e.target.innerText);
        // Ajoute une class qui display none le li cliqué
        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement('button');
        span.value = e.target.innerText;
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`;
        span.classList.add('tag', 'tag-ustensils');
        document.querySelector('.tagContainer').insertAdjacentElement('beforeend', span);

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes
        updateDomWithTags();
        ustensilsInput.value = '';

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener('click', (e) => {
          tags.ustensils = tags.ustensils.filter((x) => x !== span.innerText);
          span.remove();
          updateDomWithTags();
        });
        removeUl();
      });
    } else {
      return
    }
  });
}
// Fonction qui ajoute un tag quand on a cliqué sur un ustensils dans la liste des appareil dans le dropdown
function addTagEventAppliance() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ulIngredients = document.querySelector('.ulIngredients');
  // Selectionne tous les li
  ulIngredients.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  ulIngredients.querySelectorAll('li').forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute('data-foo')) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute('data-foo', 'bar');
      li.addEventListener('click', (e) => {
        if (tags.appliance.includes(li.innerText)) {
          return
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.appliance.push(e.target.innerText);
        // Ajoute une class qui display none le li cliqué

        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement('button');
        span.value = e.target.innerText;
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`;
        span.classList.add('tag', 'tag-appliance');
        document.querySelector('.tagContainer').insertAdjacentElement('beforeend', span);

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes
        updateDomWithTags();
        appareilInput.value = '';

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener('click', (e) => {
          tags.appliance = tags.appliance.filter((el) => el !== span.innerText);
          span.remove();
          updateDomWithTags();
        });
        removeUl();
      });
    } else {
      return
    }
  });
}
// Fonction qui ajoute un tag quand on a cliqué sur un ustensils dans la liste des ingrédients dans le dropdown
function addTagEventIngredient() {
  // Selectionne le ul concerné, qui est apparue au focus
  let ingredientsDom = document.querySelector('.ulIngredients');

  // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)
  ingredientsDom.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  // Selectionne tous les li
  ingredientsDom.querySelectorAll('li').forEach((li) => {
    // Ajoute un événement au click sur chaque li qui n'a pas l'attribut data-foo
    if (!li.hasAttribute('data-foo')) {
      // initialise data-foo pour que chaque li ne soit pas cliquable plusieurs fois
      li.setAttribute('data-foo', 'bar');
      li.addEventListener('click', (e) => {
        if (tags.ingredient.includes(li.innerText)) {
          return
        }
        // Push le tag dans le tableau correspondant de l'objet tags
        tags.ingredient.push(e.target.innerText);
        // Ajoute une class qui display none le li cliqué

        // crée li et l'ajoute dans le tagContainer
        let span = document.createElement('button');
        span.value = e.target.innerText;
        span.innerHTML = `${e.target.innerText}  <img class="crossTag" src="./images/crossTag.svg" alt="close">`;
        span.classList.add('tag', 'tag-ingredients');
        document.querySelector('.tagContainer').insertAdjacentElement('beforeend', span);

        // Au moment du clic sur le li , si sortedArray est vide, on initialise sortedArray avec toutes les recettes

        updateDomWithTags();
        ingredientInput.value = '';

        // a chaque clique sur le bouton ajouté grâce au clique sur le li,
        // on supprime le bouton et on supprime l'ingrédient de la liste
        span.addEventListener('click', (e) => {
          tags.ingredient = tags.ingredient.filter((el) => el !== span.innerText);
          span.remove();
          updateDomWithTags();
        });
        removeUl();
      });
    } else {
      return
    }
  });
}

// fonction qui permet de faire apparaitre la liste des items correspondant au focus de l'input selectionné

function inputFocus(type) {
  if (document.querySelector('.ulIngredients')) {
    removeUl();
  }
  // ajoute l'évenement sur le body => au click remove la liste
  document.body.addEventListener('mousedown', removeUl);
  switch (type) {
    case 'appareilInput':
      // Crée le ul avec les 30 premiers ingrédients et l'ajoute au dom
      let vnode1 = createUlIngredient(allAppliance);
      let applianceDom = createElement(vnode1);
      document.querySelector('.appareilList').insertAdjacentElement('afterbegin', applianceDom);
      // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)
      applianceDom.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });

      // ajout d'un événement pour chaque li du UL
      // Chaque li va crée un bouton qui sera ajouté au dessus dans la div tagContainer
      addTagEventAppliance();
      break
    case 'ingredientInput':
      // Crée le ul avec les 30 premiers ingrédients et l'ajoute au dom
      let vnode2 = createUlIngredient(allIngredients.slice(0, 30));
      let ingredientsDom = createElement(vnode2);
      document.querySelector('.ingredientsList').insertAdjacentElement('afterbegin', ingredientsDom);
      // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)

      // ajout d'un événement pour chaque li du UL
      // Chaque li va crée un bouton qui sera ajouté au dessus dans la div tagContainer
      addTagEventIngredient();
      break
    case 'ustensilsInput':
      // Crée le ul avec les 30 premiers ingrédients et l'ajoute au dom
      let vnode3 = createUlIngredient(allUstensils);
      let ustensilsDom = createElement(vnode3);
      document.querySelector('.ustensilsList').insertAdjacentElement('afterbegin', ustensilsDom);
      // Au clique sur ul ou sur le bouton a nouveau, ne remove pas le ul ( stop propagation)
      ustensilsDom.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });
      ustensilsInput.addEventListener('mousedown', (e) => {
        e.stopPropagation();
      });
      // ajout d'un événement pour chaque li du UL
      // Chaque li va crée un bouton qui sera ajouté au dessus dans la div tagContainer
      addTagEventUstensils();
      break
  }
}
// Quand on tape dans un input , cela change la liste des items selectionnés et modifie le dom
function inputChange(type) {
  switch (type) {
    case 'appareilInput':
      let appareilList = document.querySelector('.ulIngredients');
      const newAppliance = allAppliance.filter((appliance) => {
        return appliance.toLowerCase().includes(appareilInput.value.toLowerCase())
      });
      if (newAppliance.length === 0) {
        const vnode = m('ul', { className: 'ulIngredients' }, [
          m('li', { className: 'liIngredients' }, ["Pas d'ingrédients disponible"]),
        ]);
        patch(appareilList, vnode);
      } else {
        const vnode = createUlIngredient(newAppliance);
        patch(appareilList, vnode);
        addTagEventAppliance();
      }

      break
    case 'ingredientInput':
      let ulIngredients = document.querySelector('.ulIngredients');
      const newIngredients = allIngredients
        .filter((ingredient) => {
          return ingredient.toLowerCase().includes(ingredientInput.value.toLowerCase())
        })
        .slice(0, 30);
      if (newIngredients.length === 0) {
        const vnode2 = m('ul', { className: 'ulIngredients' }, [
          m('li', { className: 'liIngredients' }, ["Pas d'ingrédients disponible"]),
        ]);
        patch(ulIngredients, vnode2);
      }
      const vnode2 = createUlIngredient(newIngredients);
      patch(ulIngredients, vnode2);
      addTagEventIngredient();
      break
    case 'ustensilsInput':
      let ustensilsList = document.querySelector('.ulIngredients');
      const newUstensils = allUstensils.filter((ustensil) => {
        return ustensil.toLowerCase().includes(ustensilsInput.value.toLowerCase())
      });
      if (newUstensils.length === 0) {
        const vnode3 = m('ul', { className: 'ulIngredients' }, [
          m('li', { className: 'liIngredients' }, ["Pas d'ingrédients disponible"]),
        ]);
        patch(ustensilsList, vnode3);
      } else {
        const vnode3 = createUlIngredient(newUstensils);
        patch(ustensilsList, vnode3);
        addTagEventUstensils();
      }
      break
  }
}
// Remove the UL
function removeUl() {
  document.querySelector('.ulIngredients').remove();
  document.body.removeEventListener('mousedown', removeUl);
}
function updateDomWithTags() {
  let page = document.querySelector('.main-wrapper');
  // page = document.querySelector('.main-wrapper')
  let sortedArray = Array.from(recipes);
  if (input.value.length >= 0) {
    sortedArray = searchMainInput(sortedArray, input.value.toLowerCase());
  }
  sortedArray = triTagAll(sortedArray);
  if (sortedArray.length === 0) {
    let emptyPage = createEmptyPage();
    patch(page, emptyPage);
  } else {
    let newVnode = createPage(sortedArray);
    patch(page, newVnode);
  }
}

// Fonction principale de l'input principale
function simpleResearch(value) {
  console.time('simpleResearch/ALGO1');
  let sortedArray = Array.from(recipes);
  if (
    !(tags.ingredient.length === 0 && tags.ustensils.length === 0 && tags.appliance.length === 0)
  ) {
    sortedArray = triTagAll(sortedArray);
    sortedArray = searchMainInput(sortedArray, value.toLowerCase());
  } else {
    sortedArray = searchMainInput(sortedArray, value.toLowerCase());
  }
  console.timeEnd('simpleResearch/ALGO1');
  return sortedArray
}

// initialise la page en créant les recettes à partir de la liste des recettes , et ajoute pour chaque input un événement adéquat
function initPage() {
  const input = document.getElementById('searchBar');
  const vnode = createPage(sortedArray);
  let page = createElement(vnode);
  document.querySelector('.body').insertAdjacentElement('beforeend', page);
  // Ajout de l'évenement stop propagation sur les inputs
  ingredientInput.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  appareilInput.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  ustensilsInput.addEventListener('mousedown', (e) => {
    e.stopPropagation();
  });
  // Au focus de l'input
  appareilInput.addEventListener('focus', (e) => {
    inputFocus(e.target.id);
  });
  ingredientInput.addEventListener('focus', (e) => {
    inputFocus(e.target.id);
  });
  ustensilsInput.addEventListener('focus', (e) => {
    inputFocus(e.target.id);
  });

  // Changement de valeur de l'input
  appareilInput.addEventListener('input', (e) => {
    inputChange(e.target.id);
  });
  ustensilsInput.addEventListener('input', (e) => {
    inputChange(e.target.id);
  });
  ingredientInput.addEventListener('input', (e) => {
    inputChange(e.target.id);
  });

  // Ajoute un événement blur ( quand on quitte le input) => remet la valeur de l'input à vide
  appareilInput.addEventListener('blur', (e) => {
    e.target.value = '';
  });

  ustensilsInput.addEventListener('blur', (e) => {
    e.target.value = '';
  });

  ingredientInput.addEventListener('blur', (e) => {
    e.target.value = '';
  });

  // Ajout d'un événement click sur l'input principal
  input.addEventListener('input', (e) => {
    // Si l'input de recherche principal est supérieur ou égal à 3 caractère
    // alors va essayer de matcher avec
    let sortedArray = Array.from(recipes);
    page = document.querySelector('.main-wrapper');

    if (e.target.value.length >= 3) {
      sortedArray = simpleResearch(e.target.value);
      if (sortedArray.length > 0) {
        let vnode = createPage(sortedArray);
        patch(page, vnode);
      } else {
        let emptyPage = createEmptyPage();
        patch(page, emptyPage);
      }
    } else {
      sortedArray = triTagAll(sortedArray);
      patch(page, createPage(sortedArray));
    }
  });
  // arrête l'évenement sur le formualaire
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  });
}

const form$1 = document.getElementById('form');
const input = document.getElementById('searchBar');
const tags = {
  ustensils: [],
  appliance: [],
  ingredient: [],
};
let page;
let sortedArray = Array.from(recipes);
// Selectionne l'input ingredient
const ingredientInput$1 = document.getElementById('ingredientInput');
const appareilInput$1 = document.getElementById('appareilInput');
const ustensilsInput$1 = document.getElementById('ustensilsInput');
// Selectionne tous les inputs
const inputsTag = document.querySelectorAll('.tagInput');
//Récupère tous les ingrédients
let allIngredients = [];
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ingredients.length; j++) {
    allIngredients.push(recipes[i].ingredients[j].ingredient);
  }
}
allIngredients = [...new Set(allIngredients)].sort();
// récupére tous les ustensiles
let allUstensils = [];
for (let i = 0; i < recipes.length; i++) {
  for (let j = 0; j < recipes[i].ustensils.length; j++) {
    allUstensils.push(recipes[i].ustensils[j]);
  }
}
allUstensils = [...new Set(allUstensils)];
// récupère tous les appareils
let allAppliance = [...new Set(recipes.map((x) => x.appliance))];
initPage();

export { allAppliance, allIngredients, allUstensils, appareilInput$1 as appareilInput, form$1 as form, ingredientInput$1 as ingredientInput, input, inputsTag, page, sortedArray, tags, ustensilsInput$1 as ustensilsInput };
