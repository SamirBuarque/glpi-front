import axios from "axios";
import { cookies } from "next/headers";
import formatDateTime from "@/utils/formatDate";

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

const fetchTicketDetails = async (id: string, cookieHeader: string) => {
  console.log("ID recebido para busca: ", id);
  console.log("Cookies recebidos em fetchTicketDetails: ", cookieHeader);
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

  console.log(`params: ${params["ticket-id"]} | cookieHeader: ${cookieHeader}`);

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
  console.log("Dados recebidos: ", ticketData);
  console.log("ticketID: ", ticketData.data.id);

  return (
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
  );
};

export default TicketDetailsPage;
