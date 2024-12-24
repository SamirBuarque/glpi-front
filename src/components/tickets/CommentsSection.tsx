"use client"

import { useState } from "react"
import styles from '@/app/styles/layout/commentsSection.module.css'
import formatDateTime from '@/utils/formatDate'
import axios from "axios"

interface Comment {
    data: {
        id: number;
        userId: string;
        ticketId: bigint;
        content: string;
        createdAt: Date;
        updateAt: Date | null;
    }
}


export const CommentsSection = ({initialComments, ticketId}: {initialComments: Comment[]; ticketId: string}) => {
    const [comments, setComments] = useState<Comment[]>(initialComments)
    const [commentInput, setCommentInput] = useState<string>("")

    const handleCommentAdded: (newComment: Comment) => void = (newComment) => {
        setComments((prevComments) => [...prevComments, newComment])
    }

    const handleSubmit = async () => {
        // trim() remove os espaços em branco antes e depois da string
        // evita enviar inputs vazios para o server
        if(!commentInput.trim()) return
        try {
            const res = await axios.post(
                `http://localhost:5140/v1/tickets/${ticketId}/notes`,
                {
                    content: commentInput,
                    createdAt: new Date().toISOString(),
                },
                {
                    withCredentials: true
                }
            )
            handleCommentAdded(res)
            setCommentInput("")
        } catch(error) {
            console.log("Erro ao enviar o comentário. ", error)
        }
    }

    return (
        <div>
        <div className={styles.commentsSection}>
            <div className={styles.comments}>
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        
                        comment?.data ? (
                        <div className={styles.commentWrapper} key={comment.data.id}>
                            <span>Usuário: {comment.data.userId}</span>
                            <span>{comment.data.content}</span>
                            <span>Criado em: {formatDateTime(comment.data.createdAt)}</span>
                            {comment.data.updateAt && (
                                <span>Atualizado em: {formatDateTime(comment.data.updateAt)}</span>
                            )}
                        </div>
                        ) : (
                            <div key={index} className={styles.commentWrapper}>
                                <span>Comentário inválido</span>
                            </div>
                        )
                    ))
                ) : (
                    <span>Não há comentários</span>
                )}
            </div>
        </div>
        <div className={styles.commentsInputContainer}>
        <textarea 
            placeholder="Digite seu comentário"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className={styles.inputField}
        ></textarea>
        <button onClick={handleSubmit}
            className={styles.addButton}
        >
            Adicionar
        </button>
    </div>
    </div>
    )
}