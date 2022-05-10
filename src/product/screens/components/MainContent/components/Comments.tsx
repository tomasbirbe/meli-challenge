import { Stack, Textarea, Button, Text, Link } from "@chakra-ui/react";
import React, { FormEvent, useReducer } from "react";

enum actions {
  ADD_COMMENT,
}

const commentsReducer = (state: any, action: { type: actions; payload: any }) => {
  switch (action.type) {
    case actions.ADD_COMMENT: {
      const updatedComments = [...state, action.payload];
      const orderedComments = updatedComments.sort((a, b) => {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);

        if (date2 > date1) {
          return 1;
        }

        return -1;
      });

      return orderedComments;
    }
  }
};

export default function Comments() {
  const [comments, dispatchComments] = useReducer(commentsReducer, [
    {
      id: 1,
      content: "Buenas como se llama el local?",
      answer: {
        id: 1,
        content: "Hola si tenemos stock, somos multiventas az",
        date: "2022/05/2",
      },
      date: "2022/05/2",
    },
  ]);

  function addComment(event: any) {
    event.preventDefault();

    const commentContent = event.target[0].value;

    if (commentContent) {
      const newComment = {
        id: new Date().getDate() * Math.random() * 1000,
        content: commentContent,
        answer: {},
        date: new Date().getTime(),
      };

      dispatchComments({ type: actions.ADD_COMMENT, payload: newComment });
    }
  }

  return (
    <>
      <Text as="h2" fontSize="24px" paddingBlockStart="40px">
        Preguntas y respuestas
      </Text>
      <Text as="h3" fontSize="18px" fontWeight="bold">
        ¿Que queres saber?
      </Text>
      <Stack color="blue.500" direction="row" spacing={4}>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Costo y tiempo de envio
        </Button>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Devoluciones gratis
        </Button>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Medios de pago y promociones
        </Button>
        <Button
          _active={{ bg: "blue.200" }}
          _focus={{}}
          _hover={{ bg: "blue.100" }}
          bg="blue.50"
          borderRadius="5px"
          fontSize="14px"
          fontWeight="bold"
          height="32px"
          paddingBlock={2}
          paddingInline={3}
        >
          Garantia
        </Button>
      </Stack>
      <Text fontSize="18px" fontWeight="bold" paddingBlockStart="20px">
        Preguntale al vendedor
      </Text>
      <Stack as="form" direction="row" onSubmit={addComment}>
        <Textarea
          borderColor="gray.400"
          minHeight="48px"
          name="comment"
          paddingBlockStart="12px"
          placeholder="Escribi tu respuesta"
          resize="none"
        />
        <Button
          _active={{ bg: "#1f4e96" }}
          _focus={{}}
          _hover={{ bg: "#2968c8" }}
          bg="#3483fa"
          color="white"
          height="48px"
          paddingInline={12}
          type="submit"
        >
          Preguntar
        </Button>
      </Stack>
      <Text as="h3" fontSize="18px" fontWeight="bold" paddingBlockStart={4}>
        Ultimas realizadas
      </Text>
      <Stack spacing={6}>
        {comments?.map((comment) => {
          return (
            <Stack key={comment.id} spacing={0}>
              <Stack align="flex-end" className="comment" direction="row">
                <Text>{comment.content}</Text>
                <Link fontSize="14px">Denunciar</Link>
              </Stack>
              {comment.answer.content && (
                <Stack align="flex-end" className="comment" direction="row" paddingInlineStart={4}>
                  <Text color="blackAlpha.400">L</Text>
                  <Text color="blackAlpha.600" paddingBlockStart={1}>
                    {comment.answer.content}
                    <Text
                      color="blackAlpha.500"
                      display="inline"
                      fontSize="14px"
                      marginInlineStart={2}
                      width="fit-content"
                    >
                      {comment.answer.date}
                    </Text>
                  </Text>
                  <Link fontSize="14px">Denunciar</Link>
                </Stack>
              )}
            </Stack>
          );
        })}
      </Stack>
    </>
  );
}
