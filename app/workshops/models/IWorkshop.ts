export type Category = 'frontend' | 'backend' | 'language' | 'database' | 'mobile' | 'devops';

export interface ILocation {
    address: string;
    city: string;
    state: string;
}

export interface IModes {
    inPerson: true;
    online: false;
}

export default interface IWorkshop {
    name: string;
    category: Category;
    id: number;
    description: string;
    startDate: string;
    endDate: string;
    time: string;
    location: ILocation;
    modes: IModes;
    imageUrl: string;
}
