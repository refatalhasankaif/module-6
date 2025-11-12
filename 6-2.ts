type User = {
    name: string;
    age: number;

};

// interface : object type : array, object, function
interface IUser {
    name: string;
    age: number;

}

type Role = {
    role: 'admin' | 'user'
}

type UserWithRole = User & Role;

interface IUserWithRole extends IUser {
    role: 'admin' | 'user';
}

const user0: IUserWithRole = {
    name: 'Mr. X',
    age: 45,
    role: 'admin',
};

const user1: UserWithRole = {
    name: 'Mr. X',
    age: 45,
    role: 'admin',
};

const user2: IUser = {
    name: 'Mr. Y',
    age: 20,
};

type isAdmin = boolean;

const isAdmin : isAdmin = true;
