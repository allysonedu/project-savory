export function forgotPassword(name: string, token: string) {
  return `
    <h3>Olá ${name} ! 
    <br/> 
     <p> Vimos que você esqueceu sue senha, utilize o token: ${token} para resetar a senha </p>
    <br/> 
    <strong>Equipe savory</strong>
  `;
}
