import axios from "axios";
import { cookies } from "next/headers";
import formatDateTime from "@/utils/formatDate";
import styles from "@/app/styles/tickets/detailsTicket.module.css";
import { CommentsSection } from '@/components/tickets/CommentsSection'

interface Ticket {
  data: {
    id: number;
    userId: string;
    status: number;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    executer: string;
  };
}

interface Comment {
  data: {
    id: number;
    userId: string;
    ticketId: bigint;
    content: string;
    createdAt: Date;
    updateAt: Date;
  };
}


const fetchTicketDetails = async (id: string, cookieHeader: string) => {
  try {
    const res = await fetch(`http://localhost:5140/v1/tickets/${id}`, {
      method: "GET",
      headers: {
        Cookie: `.AspNetCore.Identity.Application=${cookieHeader}`,
      },
      credentials: "include",
    });
    return res.json();
  } catch (error) {
    console.log("Erro ao buscar os detalhes do ticket", error);
  }
};

const fetchComments = async (
  id: string,
  cookieHeader: string
): Promise<Comment[]> => {
  try {
    const res = await axios.get(
      `http://localhost:5140/v1/tickets/${id}/notes`,
      {
        withCredentials: true,
        headers: {
          Cookie: `.AspNetCore.Identity.Application=${cookieHeader}`,
        },
      }
    );

    if (!res.data?.data || res.data.data === 0) {
      console.log("NENHUM COMENTARIO ENCONTRADO PARA O TICKET")
      return []
    }

    const comments = res.data.data.map((item: any) => ({
      data: {
        id: item.id,
        userId: item.userId,
        ticketId: BigInt(item.ticketId),
        content: item.content,
        createdAt: new Date(item.createdAt),
        updateAt: item.updateAt ? new Date(item.updateAt) : null,
      },
    }));
    return comments;
  } catch (error) {
    console.log("Erro ao recuperar os comentários", error);
    return []
  }
};

const TicketDetailsPage = async ({
  params,
}: {
  params: { "ticket-id": string };
}) => {
  // capturando a porra do cookie
  const cookieStore = cookies();
  const cookieHeader = cookieStore.get(
    ".AspNetCore.Identity.Application"
  )?.value;

  if (!cookieHeader) {
    console.log("erro ao carregar o cookie de autenticação");
    return (
      <div>
        <p>Erro ao carregar os cookies de autenticação.</p>
      </div>
    );
  }

  const ticketData: Ticket = await fetchTicketDetails(
    params["ticket-id"],
    cookieHeader
  );

  const comments: Comment[] = await fetchComments(
    params["ticket-id"],
    cookieHeader
  );

  return (
    <div>
      <div>
        <h1>Detalhamento do ticket</h1>
        <p>ID: {ticketData.data.id}</p>
        <p>Título: {ticketData.data.title}</p>
        <p>Descrição: {ticketData.data.description}</p>
        <p>Status: {ticketData.data.status}</p>
        <p>Executante: {ticketData.data.executer}</p>
        <p>Criado em: {formatDateTime(ticketData.data.createdAt)}</p>
        <p>Atualizado em: {formatDateTime(ticketData.data.updatedAt)}</p>
      </div>
      <div className={styles.commentsContainer}>
        <h3>Comentários</h3>
        <CommentsSection initialComments={comments} ticketId={params["ticket-id"]}/>
      </div>
    </div>
  );
};

export default TicketDetailsPage;
