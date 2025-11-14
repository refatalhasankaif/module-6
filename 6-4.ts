interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;
    bike?: X;
}

interface brandlessWatch {
    heartRate: boolean;
    stopWatch: boolean;
}

const poorDeveloper: Developer<brandlessWatch, {
    model: string;
    version: string;
}> = {
    name: 'Mr. Poor',
    salary: 20,
    device: {
        brand: 'Lenevo',
        model: 'T41',
        releasedYear: '2022',
    },
    smartWatch: {
        heartRate: true,
        stopWatch: true,
    },
    bike: {
        model: 'R15',
        version: 'Indo'
    }
};

interface BrandedWatch {
    heartRate: boolean;
    stopWatch: boolean;
    call: boolean;
    ai: boolean;
    calculator: boolean;
}

const richDeveloper: Developer<BrandedWatch> = {
    name: 'Mr. Poor',
    salary: 20,
    device: {
        brand: 'Lenevo',
        model: 'T41',
        releasedYear: '2022',
    },
    smartWatch: {
        heartRate: true,
        stopWatch: true,
        call: true,
        calculator: true,
        ai: true,
    },
}