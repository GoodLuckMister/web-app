import React from 'react';

import {
    Beauty,
    BusinessSupport,
    Design,
    Fashion,
    Legal,
    Marketing,
    Nutrition,
    Teachers,
    Therapy,
    Travel,
    Writers
} from '../../Icons';

const map = {
    ['Teachers'.toLocaleLowerCase()]: <Teachers />,
    ['Marketing'.toLocaleLowerCase()]: <Marketing />,
    ['Design'.toLocaleLowerCase()]: <Design />,
    ['Writers'.toLocaleLowerCase()]: <Writers />,
    ['BusinessSupport'.toLocaleLowerCase()]: <BusinessSupport />,
    ['Therapy'.toLocaleLowerCase()]: <Therapy />,
    ['Nutrition'.toLocaleLowerCase()]: <Nutrition />,
    ['Travel'.toLocaleLowerCase()]: <Travel />,
    ['Beauty'.toLocaleLowerCase()]: <Beauty />,
    ['Fashion'.toLocaleLowerCase()]: <Fashion />,
    ['Legal'.toLocaleLowerCase()]: <Legal />
};
export const mapIdToIcon = (id: string) => map[id.toLocaleLowerCase()] ?? <Design />;
