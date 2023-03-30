import {ISelectOptions} from "../../shared/ui-kit/Select/Select";

enum SelectEnum {
    SPORT = 'sports',
    BUSINESS = 'business',
    COMPETITION = 'competition',
    HUMOROUS = 'humor',
    POLITICS = 'politics'
}

enum radioEnum {
    JAMES = 'William James',
    EINSTEIN = 'Albert Einstein',
    MUSK = 'Elon Musk'
}

export const SelectOptions: ISelectOptions[] = [
    {
        label: 'Спорт',
        value: SelectEnum.SPORT
    },
    {
        label: 'Соревнование',
        value: SelectEnum.COMPETITION
    },
    {
        label: 'Бизнесс',
        value: SelectEnum.BUSINESS
    },
    {
        label: 'Юмор',
        value: SelectEnum.HUMOROUS
    },
    {
        label: 'Политика',
        value: SelectEnum.POLITICS
    }
]

export const radioOptions: ISelectOptions[] = [
    {
        label: 'William James',
        value: radioEnum.JAMES
    },
    {
        label: 'Albert Einstein',
        value: radioEnum.EINSTEIN
    },
    {
        label: 'Elon Musk',
        value: radioEnum.MUSK
    }
]



export {}