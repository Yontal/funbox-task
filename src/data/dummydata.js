import Good from '../models/good'

export default [
    new Good(
        'Сказочное заморское яство',
        'Нямушка',
        'с фуа-гра',
        ['10 порций', 'мышь в подарок'],
        '0,5',
        'КГ',
        {
            default: 'Чего сидишь? Порадуй котэ',
            selected: 'Фуа-гра - экзотичненько',
            disabled: 'Печалька, с фуа-гра закончился.'
        },
        'default',
        '1'       
    ),
    new Good(
        'Сказочное заморское яство',
        'Нямушка',
        'с рыбой',
        ['40 порций', '2 мыши в подарок'],
        '2',
        'КГ',
        {
            default: 'Чего сидишь? Порадуй котэ',
            selected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            disabled: 'Печалька, с рыбой закончился.'
        },
        'selected',
        '2'       
    ),
    new Good(
        'Сказочное заморское яство',
        'Нямушка',
        'с курой',
        ['100 порций', '5 мышей в подарок заказчик доволен'],
        '5',
        'КГ',
        {
            default: 'Чего сидишь? Порадуй котэ',
            selected: 'Курочка сытная.',
            disabled: 'Печалька, с курой закончился.'
        },
        'disabled',
        '3'
    ),
]