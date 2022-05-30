import { Container, Grid, Skeleton, Stack } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import HeaderBreadcrumbs from '@/components/HeaderBreadcrumbs';
import Page from '@/components/Page';
import { title_admin } from '@/config';
import { getBoard, persistCard, persistColumn } from '@/redux/slices/kanban';
import { useDispatch, useSelector } from '@/redux/store';
import { PATH_DASHBOARD } from '@/routes/paths';

import { KanbanColumn, KanbanColumnAdd } from './modules';

const SkeletonLoad = (
  <>
    {[...Array(3)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

export default function Kanban() {
  const dispatch: any = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { board } = useSelector((state: any) => state.kanban);

  useEffect(() => {
    dispatch(getBoard());
  }, [dispatch]);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return;
    if (type === 'column') {
      const newColumnOrder = Array.from(board.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      dispatch(persistColumn(newColumnOrder));
      enqueueSnackbar('更新成功', { variant: 'success' });
      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start.id === finish.id) {
      const updatedCardIds = [...start.cardIds];
      updatedCardIds.splice(source.index, 1);
      updatedCardIds.splice(destination.index, 0, draggableId);

      const updatedColumn = {
        ...start,
        cardIds: updatedCardIds
      };

      dispatch(
        persistCard({
          columns: {
            ...board.columns,
            [updatedColumn.id]: updatedColumn
          }
        })
      );

      return;
    }

    const startCardIds = [...start.cardIds];
    startCardIds.splice(source.index, 1);
    const updatedStart = {
      ...start,
      cardIds: startCardIds
    };

    const finishCardIds = [...finish.cardIds];
    finishCardIds.splice(destination.index, 0, draggableId);
    const updatedFinish = {
      ...finish,
      cardIds: finishCardIds
    };

    dispatch(
      persistCard({
        columns: {
          ...board.columns,
          [updatedStart.id]: updatedStart,
          [updatedFinish.id]: updatedFinish
        }
      })
    );
    enqueueSnackbar('Update success', { variant: 'success' });
  };

  return (
    <Page title={`看版 ${title_admin}`} sx={{ height: '100%' }}>
      <Container maxWidth={false} sx={{ height: '100%' }}>
        <HeaderBreadcrumbs
          heading="看版"
          links={[
            {
              name: 'APP',
              href: PATH_DASHBOARD.root
            },
            { name: '看版' }
          ]}
        />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <Stack
                {...provided.droppableProps}
                ref={provided.innerRef}
                direction="row"
                alignItems="flex-start"
                spacing={3}
                sx={{ height: 'calc(100% - 32px)', overflowY: 'hidden' }}
              >
                {board?.columnOrder?.map((columnId: any, index: number) => {
                  const column = board.columns[columnId];
                  return <KanbanColumn index={index} key={columnId} column={column} />;
                })}

                {!board?.columnOrder.length && SkeletonLoad}

                {provided.placeholder}
                <KanbanColumnAdd />
              </Stack>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </Page>
  );
}
