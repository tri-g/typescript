class Student
{
	fullname:string;
	constructor(public firstname:string, public middlename:string,public lastname:string )
	{
		this.fullname=firstname+" "+middlename+" "+lastname;
	}
}
interface person
{
	firstname:string;
	lastname:string;
}
function greeter(p:person)
{
	return "hello "+p.firstname+" "+p.lastname;
}
let user=new Student("tri","gopi","vinu");
console.log(greeter(user));