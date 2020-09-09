<?php

namespace App\Entity;

use App\Entity\ToDoList;


class Task {
    
    private bool $isCompleted;

    private $name;

    private $toDoList;

    function __construct($name)
    {
        $this->name = $name;
    }




    




    /**
     * Get the value of isCompleted
     */ 
    public function getIsCompleted()
    {
        return $this->isCompleted;
    }

    /**
     * Set the value of isCompleted
     *
     * @return  self
     */ 
    public function setIsCompleted($isCompleted)
    {
        $this->isCompleted = $isCompleted;

        return $this;
    }

    /**
     * Get the value of name
     */ 
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set the value of name
     *
     * @return  self
     */ 
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get the value of toDoList
     */ 
    public function getToDoList()
    {
        return $this->toDoList;
    }

    /**
     * Set the value of toDoList
     *
     * @return  self
     */ 
    public function setToDoList($toDoList)
    {
        $this->toDoList = $toDoList;

        return $this;
    }
}