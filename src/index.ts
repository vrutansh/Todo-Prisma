import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function insertUser(
  username: string, 
  email:string, 
  password: string,  
  firstname: string,
  lastname:  string){
    const response = await prisma.user.create({
          data: {  
                 username, 
                 email, 
                 password,  
                 firstname,
                 lastname
        }
        
    })
     console.log(response,"RESPONSE")
  }

  console.log(insertUser('vrutansh1','vru@gmail.co','1236','vr','atel',), "User Created ....")
  


  async function updateUser(
    
  username: string, 
  email:string, 
  password: string,  
  firstname: string,
  lastname:  string){
    prisma.user.updateMany({
          data: {  
                 username, 
                 email, 
                 password,  
                 firstname,
                 lastname
        }
    })
  }







  async function createTodo(userId: number, title: string, description: string) {
  const todo = await prisma.todo.create({
    data: {
      title,
      description,
      userId
    },
  });
  console.log(todo);

}

getUser(1, "go to gym", "go to gym and do 10 pushups");



async function getTodos(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
        userId: userId,
        },
    });
    console.log(todos);
}

getTodos(1);




async function getTodosAndUserDetails(userId: number, ) {
    const todos = await prisma.todo.findMany({
        where: {
            userId: userId,
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    });
    console.log(todos);
}

getTodosAndUserDetails(1);