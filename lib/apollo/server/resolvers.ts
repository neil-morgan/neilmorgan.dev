import { Student } from "@/lib/mongodb";

type unused = unknown;

type Args = {
  id?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
};

export const resolvers = {
  Query: {
    greetings: () => "GraphQL is Awesome",
    welcome: (_: unused, { name }: { name: string }) => `Hello ${name}`,
    students: async () => await Student.find({}),
    student: async (_: unused, { id }: Args) => await Student.findById(id),
  },
  Mutation: {
    create: async (_: unused, args: Args) => {
      const { firstName, lastName, age } = args;
      const newStudent = new Student({
        firstName,
        lastName,
        age,
      });
      await newStudent.save();
      return newStudent;
    },
    update: async (_: unused, args: Args) => {
      const { id } = args;
      const result = await Student.findByIdAndUpdate(id, args);
      return result;
    },
    delete: async (_: unused, args: Args) => {
      const { id } = args;
      const deletedStudent = await Student.findByIdAndDelete(id);
      if (!deletedStudent) {
        throw new Error(`Student with ID ${id} not found`);
      }
      return deletedStudent;
    },
  },
};
