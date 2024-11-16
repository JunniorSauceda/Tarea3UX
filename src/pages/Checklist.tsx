import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, FormControlLabel, Checkbox, Typography } from '@mui/material';

interface Deber {
  id: number;
  label: string;
  completed: boolean;
}

function Quehacer() {
  const [tareas, setTareas] = useState<Deber[]>([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);

  useEffect(() => {
    if (tareas.length > 0) {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim()) {
      const nuevaTareaObj: Deber = {
        id: tareas.length, 
        label: nuevaTarea, 
        completed: false 
      };
      setTareas(prevTareas => [...prevTareas, nuevaTareaObj]);
      setNuevaTarea('');
    }
  };

  const eliminarTodo = () => {
    setTareas([]);
  };

  const eliminarCompletadas = () => {
    const tareasPendientes = tareas.filter(tarea => !tarea.completed);
    setTareas(tareasPendientes);
  };

  const alternarEstadoTarea = (id: number) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
    ));
  };

  return (
    <Box sx={{ padding: '60px' }}>
      <Typography variant="h4" sx={{ fontWeight: 600, marginBottom: '20px' }}>
        Lista de Quehaceres
      </Typography>

      <TextField
        label="Nueva tarea"
        variant="outlined"
        fullWidth
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
        InputProps={{
          style: { color: '#171717', backgroundColor: 'white' },
        }}
        sx={{ marginBottom: '20px' }}
      />

      <Box sx={{ marginBottom: '20px' }}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={agregarTarea} 
          sx={{ marginRight: '20px' }}
        >
          Agregar tarea
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={eliminarCompletadas} 
          sx={{ marginRight: '20px' }}
        >
          Eliminar Tareas Finalizadas
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={eliminarTodo}
        >
          Eliminar todo
        </Button>
      </Box>

      <Box>
        {tareas.map((tarea) => (
          <FormControlLabel
            key={tarea.id}
            control={
              <Checkbox
                checked={tarea.completed}
                onChange={() => alternarEstadoTarea(tarea.id)}
              />
            }
            label={tarea.label}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Quehacer;
