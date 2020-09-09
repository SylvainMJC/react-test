<?php

namespace App\Entity;

use App\Entity\Task;


class ToDoList {
    
    private $title;
    private $tasks = [];
   
    function __construct()
    {
        $this->tasks = [];
    }

    public function getTasks()
    {
        return $this->tasks;
    }

    public function addTask(Task $task): self
    {
        if (!in_array($task, $this->tasks)) {
            $this->tasks[] = $task;
            $task->setToDoList($this);
        }

        return $this;
    }

    public function removeTask(Task $task): self
    {
        if (!in_array($task, $this->tasks)) {

            //array_search()
            //unset()
            //\array_values
            $key = array_search($task, $this->tasks);
        
            unset($this->tasks[$key]);
            array_values($this->tasks);
            
            //remove task

            // set the owning side to null (unless already changed)
            if ($task->getToDoList() === $this) {
                $task->setToDoList(null);
            }
        }

        return $this;
    }


    /**
     * Get the value of title
     */ 
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set the value of title
     *
     * @return  self
     */ 
    public function setTitle($title)
    {
        $this->title = $title;

        return $this;
    }
}

?>
