import gql from 'graphql-tag';

export const USUARIOS_QUERY = gql`
	{
		getUsuarios {
			id
			nombre
			apellido
			edad
			empresa
			tipo
		}
	}
`;

export const USUARIO_QUERY = gql`
	query ConsultaCliente($id: ID) {
		getUsuario(id: $id) {
			id
			nombre
			apellido
			empresa
			edad
			tipo
			emails {
				email
			}
		}
	}
`;
