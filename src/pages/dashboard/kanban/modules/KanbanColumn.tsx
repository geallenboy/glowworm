import plusFill from '@iconify/icons-eva/plus-fill';
import { Icon } from '@iconify/react';
import { Button, Paper, Stack } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

import { addTask, deleteColumn, deleteTask, updateColumn } from '@/redux/slices/kanban';
import { useDispatch } from '@/redux/store';

import KanbanColumnToolBar from './KanbanColumnToolBar';
import KanbanAddTask from './KanbanTaskAdd';
import KanbanTaskCard from './KanbanTaskCard';

export default function KanbanColumn({ column, index }: any) {
  const dispatch: any = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { board } = useSelector((state: any) => state.kanban);
  const [open, setOpen] = useState(false);

  const { name, cardIds, id } = column;

  const handleOpenAddTask = () => {
    setOpen((prev) => !prev);
  };

  const handleCloseAddTask = () => {
    setOpen(false);
  };

  const handleDeleteTask = (cardId: any) => {
    dispatch(deleteTask({ cardId, columnId: id }));
    enqueueSnackbar('Delete success', { variant: 'success' });
  };

  const handleUpdateColumn = async (newName: any) => {
    try {
      if (newName !== name) {
        dispatch(updateColumn(id, { ...column, name: newName }));
        enqueueSnackbar('Update success', { variant: 'success' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteColumn = async () => {
    try {
      dispatch(deleteColumn(id));
      enqueueSnackbar('Delete success', { variant: 'success' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddTask = (task: any) => {
    dispatch(addTask({ card: task, columnId: id }));
    enqueueSnackbar('Add success', { variant: 'success' });
    handleCloseAddTask();
  };

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Paper
          {...provided.draggableProps}
          ref={provided.innerRef}
          variant="outlined"
          sx={{ px: 2, bgcolor: 'grey.5008' }}
        >
          <Stack spacing={3} {...provided.dragHandleProps}>
            <KanbanColumnToolBar
              columnId={id}
              columnName={name}
              onDelete={handleDeleteColumn}
              onUpdate={handleUpdateColumn}
            />

            <Droppable droppableId={id} type="task">
              {(provided) => (
                <Stack ref={provided.innerRef} {...provided.droppableProps} spacing={2} width={280}>
                  {cardIds.map((cardId: any, index: number) => {
                    const card = board?.cards[cardId];
                    return (
                      <KanbanTaskCard
                        key={cardId}
                        onDeleteTask={handleDeleteTask}
                        card={card}
                        index={index}
                      />
                    );
                  })}
                  {provided.placeholder}
                </Stack>
              )}
            </Droppable>

            <Stack spacing={2} sx={{ pb: 3 }}>
              {open && (
                <KanbanAddTask onAddTask={handleAddTask} onCloseAddTask={handleCloseAddTask} />
              )}

              <Button
                fullWidth
                size="large"
                color="inherit"
                startIcon={<Icon icon={plusFill} width={20} height={20} />}
                onClick={handleOpenAddTask}
                sx={{ fontSize: 14 }}
              >
                添加任务
              </Button>
            </Stack>
          </Stack>
        </Paper>
      )}
    </Draggable>
  );
}
