export async function POST(req:Response) {
    console.log(await req.json());
    return Response.json({success:true});
    
}

export async function GET(req:Response) {
    console.log(await req.json());
    return Response.json({success:true});
    
    
}